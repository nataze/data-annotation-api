import { Schema, model, Document } from 'mongoose';
import polygonArea from '../utils/polygonArea';

export interface SamMetadata {
  predicted_iou?: number;
  stability_score?: number;
  mask_rle?: string;
  point_coords?: [number, number][];
  [key: string]: any;
}

export interface AnnotationDoc extends Document {
  image: Schema.Types.ObjectId;
  annotator: string;
  label: string;
  mask: number[][][];
  bbox: { x: number; y: number; width: number; height: number };
  area: number;
  metadata?: SamMetadata;
}

const SamMetadataSchema = new Schema<SamMetadata>(
  {
    predicted_iou:   { type: Number },
    stability_score: { type: Number },
    mask_rle:        { type: String },
    point_coords:    { type: [[Number]] }
  },
  { _id: false, strict: false }
);

const AnnotationSchema = new Schema<AnnotationDoc>(
  {
    image:     { type: Schema.Types.ObjectId, ref: 'Image', required: true, index: true },
    annotator: { type: String, required: true, index: true },
    label:     { type: String, required: true, index: true },
    mask:      { type: [[[Number]]], required: true },
    bbox:      {
      x:      { type: Number, required: true },
      y:      { type: Number, required: true },
      width:  { type: Number, required: true },
      height: { type: Number, required: true }
    },
    area:      { type: Number, required: true, default: 0 },
    metadata:  { type: SamMetadataSchema, default: {} }
  },
  {
    timestamps: true
  }
);

// Indexes
AnnotationSchema.index({ image: 1 });
AnnotationSchema.index({ label: 1 });
AnnotationSchema.index({ annotator: 1 });
AnnotationSchema.index({ image: 1, area: -1 });
AnnotationSchema.index({ image: 1, label: 1, annotator: 1 });


AnnotationSchema.pre('validate', function (next) {
  this.area = this.mask.reduce((sum: number, poly: number[][]) => sum + polygonArea(poly), 0);
  next();
});

export const Annotation = model<AnnotationDoc>('Annotation', AnnotationSchema);
