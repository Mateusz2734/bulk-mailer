import { Schema, model } from "mongoose";

interface ITemplate {
  name: string;
  body: string;
};

const templateSchema = new Schema<ITemplate>({
  name: { type: String, required: true, unique: true },
  body: { type: String, required: true },
});

const Template = model<ITemplate>("Template", templateSchema);

export default Template;
