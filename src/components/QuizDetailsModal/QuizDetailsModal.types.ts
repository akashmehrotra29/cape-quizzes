import { Questions } from "../../database/quiz.db.types";

export type QuizDetailsModalProp = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
  category: string;
  description: string;
  playTime: number;
  maxScore: number;
  image: string;
  questions: Questions[];
};
