import { Schema, model } from "mongoose";

interface ITemplate {
    name: string;
    body: string;
};

const templateSchema = new Schema<ITemplate>({
    name: String,
    body: String,
});

const Template = model<ITemplate>("Template", templateSchema);

export default Template;