import { CardData } from "../datamappers/interfaces/CardDatamapperReq";

export type CardResponse = Omit<CardData, "difficulty"> & {
  difficulty: "new" | "easy" | "medium" | "hard";
};

export type UpdateCardAnswerDTO = {
  id: number;
  isCorrect: boolean;
};

const DIFF_HARD_MAX = 15;
const DIFF_MEDIUM_MAX = 30;
const DIFF_NEW = 0;

export function difficultyNumberToLabel(
  difficulty: number
): "new" | "easy" | "medium" | "hard" {
  const d = typeof difficulty === "number" ? difficulty : 0;
  if (d === DIFF_NEW) return "new";
  if (d <= DIFF_HARD_MAX) return "hard";
  if (d <= DIFF_MEDIUM_MAX) return "medium";
  return "easy";
}
