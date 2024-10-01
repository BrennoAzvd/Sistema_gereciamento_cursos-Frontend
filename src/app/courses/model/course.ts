import { Lesson } from "./lesson";

export interface Course {
  _id: string;
  name: string;
  description: string;
  category: string;
  lessons?: Lesson[];
}
