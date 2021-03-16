import { model, Schema, Document } from 'mongoose';

export interface ILab extends Document {
  title: string;
  description: string;
  subjectCode: string;
  subjectName: string;
  numberLab: number;
  semester: string;
  docent: string;
  publishDate: Date;
  deliberyDate: Date;
  bodyPath: string;
  codePath: string;
  imagePath: string;
}

const laboratorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  subjectCode: {
    type: String,
    required: true,
    trim: true
  },
  subjectName: {
    type: String,
    required: true,
    trim: true
  },
  numberLab: {
    type: Number,
    required: true
  },
  semester: String,
  docent: String,
  publishDate: Date,
  deliberyDate: Date,
  bodyPath: String,
  codePath: String,
  imagePath: String
}, {
  timestamps: true,
  versionKey: false
});

export default model<ILab>('Laboratory', laboratorySchema);