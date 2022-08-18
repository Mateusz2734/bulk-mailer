import { Schema, model } from "mongoose";

interface IGroup {
  name: string;
  emails: [string];
};

const groupSchema = new Schema<IGroup>({
  name: String,
  emails: [String],
});

const Group = model<IGroup>("Group", groupSchema);

const newGroup = new Group({
  name: "Best Users",
  emails: ["mateusz.wala2734@gmail.com", "bartosz.wala1@gmail.com"]
});

export default Group;