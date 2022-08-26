import config from "../config/default";
import sendMsg, { MailDataRequired, setApiKey, send } from '@sendgrid/mail';
import { TemplateDocument } from "../models/template.model";
import log from "../log/logger";

export async function sendMail(template: TemplateDocument, to_email: string) {
  sendMsg.setApiKey(config.sendgrid_api_key);

  const msg: MailDataRequired = {
    to: to_email,
    from: config.from_email,
    subject: template.subject,
    html: template.body,
  };

  return sendMsg.send(msg);
}
