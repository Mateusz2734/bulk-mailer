import config from "../config/default";
import sgMail, { MailDataRequired, setApiKey, send } from '@sendgrid/mail';
import { GroupDocument } from "../models/group.model";
import { TemplateDocument } from "../models/template.model";
import log from "../log/logger";

export default async function sendMail(template: TemplateDocument, to_email: string): Promise<void> {
  setApiKey(config.sendgrid_api_key);

  const msg: MailDataRequired = {
    to: to_email,
    from: config.from_email,
    subject: template.subject,
    html: template.body,
  };

  try {
    await send(msg);
    log.info(`Email to ${to_email} sent`);
  } catch (error) {
    log.error(error);
  }
}
