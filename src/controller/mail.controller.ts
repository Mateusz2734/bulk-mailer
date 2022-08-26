import { Request, Response } from "express";
import { TemplateDocument } from "../models/template.model";
import { GroupDocument } from "../models/group.model";
import { sendMail } from "../service/mail.service";
import log from "../log/logger";

export async function sendMailHandler(req: Request, res: Response): Promise<void> {
  const group: GroupDocument = req.body.group;
  const template: TemplateDocument = req.body.template;
  let errorsCount: number = 0;
  let sentCount: number = 0;
  for (const email of group.emails) {
    try {
      const response = sendMail(template, email);
      sentCount++;
      log.trace(`Sent mail to ${email}`);
    } catch (error) {
      errorsCount++;
      log.error(error);
    }
  }
  res.status(200).json({ message: `Function escaped with ${sentCount} sent mails and ${errorsCount} errors.` });
}