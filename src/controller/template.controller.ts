import { createTemplate, findTemplate, deleteTemplate, updateTemplate, findAllTemplates, deleteAllTemplates } from "../service/template.service";
import { Request, Response } from "express";
import log from "../log/logger";
import { capitalize } from "lodash";
import { TemplateDocument } from "../models/template.model";

export async function createTemplateHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  const body: TemplateDocument = req.body;
  try {
    const template = await createTemplate({ ...body, name: name });
    res.status(200).json({ template: template });
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(409).json({ error: "Group with given name already exists" });
    };
  }
}

export async function findTemplateHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  try {
    const template = await findTemplate({ name: name });
    if (!template) {
      res.status(404).json({ error: "Template with given name doesn't exist" });
    } else {
      res.status(200).json({ template: template });
    }
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(500).json({ error: error.message });
    };
  }
}

export async function deleteTemplateHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  try {
    const info = await deleteTemplate({ name: name });
    if (info.deletedCount === 0) {
      res.status(404).json({ error: "Template with given name wasn't deleted" });
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

export async function updateTemplateHandler(req: Request, res: Response) {
  const name = capitalize(req.params.name);
  const body: TemplateDocument = req.body;
  body.name = capitalize(body.name);
  try {
    if (!body.name) {
      var template = await updateTemplate(
        { name: name },
        { ...body, name: name },
        { new: true }
      );
    } else {
      var template = await updateTemplate(
        { name: name },
        { ...body },
        { new: true }
      );
    }
    res.status(200).json({ template: template });
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}

export async function findAllTemplatesHandler(req: Request, res: Response) {
  const templates = await findAllTemplates();
  res.status(200).json({ templates: templates });
}

export async function deleteAllTemplatesHandler(req: Request, res: Response) {
  const info = await deleteAllTemplates();
  res.status(200).json({ info: info });
}