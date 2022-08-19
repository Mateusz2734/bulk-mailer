import { createGroup, findGroup, deleteGroup, updateGroup, findAllGroups, deleteAllGroups } from "../service/group.service";
import { Request, Response } from "express";
import log from "../log/logger";
import { capitalize } from "lodash";
import { GroupDocument } from "../models/group.model";


export async function createGroupHandler(req: Request, res: Response) {
  log.trace(`${req.method} /groups${req.url}`);
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

export async function findAllGroupsHandler(req: Request, res: Response) {
  const groups = await findAllGroups();
  res.status(200).json({ groups: groups });
}