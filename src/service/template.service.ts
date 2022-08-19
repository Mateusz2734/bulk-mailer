import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions, } from "mongoose";
import Template, { TemplateDocument } from "../models/template.model";

export function createGroup(input: DocumentDefinition<TemplateDocument>) {
  return Template.create(input);
}

export function findGroup(filter: FilterQuery<TemplateDocument>, options: QueryOptions = { lean: true }) {
  return Template.findOne(filter, {}, options);
}

export function deleteGroup(input: DocumentDefinition<TemplateDocument>) {
  return Template.deleteOne(input);
}

export function updateGroup(filter: QueryOptions<TemplateDocument>, update: UpdateQuery<TemplateDocument>, options: QueryOptions) {
  return Template.findOneAndUpdate(filter, update, options);
}

export function findAllGroups() {
  return Template.find({});
}

export function deleteAllGroups() {
  return Template.deleteMany({});
}