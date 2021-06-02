export type Options = {
  id: string;
  text: string;
  isRight: boolean;
};

export type Questions = {
  id: string;
  question: string;
  points: number;
  negativePoints: number;
  options: Options[];
};

export type Quiz = {
  id: string;
  topic: string;
  description: string;
  playTime: number;
  maxScore: number;
  image: string;
  questions: Questions[];
};

export type QuizDatabase = Quiz[];
