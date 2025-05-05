import { Schema, model, Document } from 'mongoose';

export interface ImageDoc extends Document {
  project: Schema.Types.ObjectId;
  uri: string;
  width: number;
  height: number;
}

const ImageSchema = new Schema<ImageDoc>(
  {
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
    uri:     { type: String, required: true },
    width:   { type: Number, required: true },
    height:  { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

export const Image = model<ImageDoc>('Image', ImageSchema);
