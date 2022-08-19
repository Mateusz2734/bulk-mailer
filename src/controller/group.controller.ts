import { createGroup, findGroup, deleteGroup, updateGroup, findAllGroups, deleteAllGroups } from "../service/group.service";
import { Request, Response } from "express";
import log from "../log/logger";
import { capitalize } from "lodash";
import { GroupDocument } from "../models/group.model";


export async function createGroupHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  const body: GroupDocument = req.body;
  try {
    const group = await createGroup({ ...body, name: name });
    res.status(200).json({ group: group });
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(409).json({ error: "Group with given name already exists" });
    };
  }
}

export async function findGroupHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  try {
    const group = await findGroup({ name: name });
    if (!group) {
      res.status(404).json({ error: "Group with given name doesn't exist" });
    } else {
      res.status(200).json({ group: group });
    }
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(500).json({ error: error.message });
    };
  }
}

export async function deleteGroupHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  try {
    const info = await deleteGroup({ name: name });
    if (info.deletedCount === 0) {
      res.status(404).json({ error: "Group with given name wasn't deleted" });
    } else {
      res.status(200).json({ info: info });
    }
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(500).json({ error: error.message });
    };
  }
}

export async function updateGroupHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  const body: GroupDocument = req.body;
  body.name = capitalize(body.name);
  try {
    const group = await updateGroup(
      { name: name },
      { $addToSet: { emails: { $each: body.emails } }, name: body.name },
      { new: true, upsert: true }
    );
    res.status(200).json({ group: group });
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}

export async function findAllGroupsHandler(req: Request, res: Response) {
  const groups = await findAllGroups();
  res.status(200).json({ groups: groups });
}

export async function deleteAllGroupsHandler(req: Request, res: Response) {
  const info = await deleteAllGroups();
  res.status(200).json({ info: info });
}
