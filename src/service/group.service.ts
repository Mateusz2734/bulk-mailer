import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions, } from "mongoose";
import Group, { GroupDocument } from "../models/group.model";

export function createGroup(input: DocumentDefinition<GroupDocument>) {
  return Group.create(input);
}

export function findGroup(filter: FilterQuery<GroupDocument>, options: QueryOptions = { lean: true }) {
  return Group.findOne(filter, {}, options);
}

export function deleteGroup(input: FilterQuery<GroupDocument>) {
  return Group.deleteOne(input);
}

export function updateGroup(filter: QueryOptions<GroupDocument>, update: UpdateQuery<GroupDocument>, options: QueryOptions) {
  return Group.findOneAndUpdate(filter, update, options);
}

export function findAllGroups() {
  return Group.find({});
}

export function deleteAllGroups() {
  return Group.deleteMany({});
}