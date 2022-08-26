import { Schema, model, Document } from "mongoose";

export interface TemplateDocument extends Document {
  name: string;
  body: string;
  subject: string;
};

const templateSchema = new Schema<TemplateDocument>({
  name: { type: String, required: true, unique: true },
  body: { type: String, required: true },
  subject: { type: String, required: true },
});

const Template = model<TemplateDocument>("Template", templateSchema);

export default Template;
