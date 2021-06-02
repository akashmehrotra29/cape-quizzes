import { Questions } from "../../database/quiz-db.types";

export type QuizDetailsModalProp = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  topic: string;
  description: string;
  playTime: number;
  maxScore: number;
  image: string;
  questions: Questions[];
};
