import { Schema, model, Document } from "mongoose";

export interface GroupDocument extends Document {
  name: string;
  emails: [string];
};

const groupSchema = new Schema<GroupDocument>({
  name: { type: String, required: true, unique: true },
  emails: [{ type: String, required: true }],
});

const Group = model<GroupDocument>("Group", groupSchema);

export default Group;