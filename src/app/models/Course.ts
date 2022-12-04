import { Schema, model } from "mongoose";

export interface ICourse {
  title: string;
  description: string;
}
const courseSchema = new Schema<ICourse>(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
const CourseModel = model<ICourse>("Course", courseSchema);

export default CourseModel;
