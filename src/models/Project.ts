import { Schema, model, Document } from 'mongoose';

export interface ProjectDoc extends Document {
  name: string;
  description?: string;
}

const ProjectSchema = new Schema<ProjectDoc>(
  {
    name:        { type: String, required: true },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

export const Project = model<ProjectDoc>('Project', ProjectSchema);
