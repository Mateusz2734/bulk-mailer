import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions, } from "mongoose";
import Template, { TemplateDocument } from "../models/template.model";

export function createTemplate(input: DocumentDefinition<TemplateDocument>) {
  return Template.create(input);
}

export function findTemplate(filter: FilterQuery<TemplateDocument>, options: QueryOptions = { lean: true }) {
  return Template.findOne(filter, {}, options);
}

export function deleteTemplate(input: FilterQuery<TemplateDocument>) {
  return Template.deleteOne(input);
}

export function updateTemplate(filter: QueryOptions<TemplateDocument>, update: UpdateQuery<TemplateDocument>, options: QueryOptions) {
  return Template.findOneAndUpdate(filter, update, options);
}

export function findAllTemplates() {
  return Template.find({});
}

export function deleteAllTemplates() {
  return Template.deleteMany({});
}