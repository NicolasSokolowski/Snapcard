import { useMemo } from "react";
import { useAppSelector } from "../store/hooks";

export function useDeckDifficultyIndicator(deckId: number) {
  const cards = useAppSelector((state) => state.card.cards);

  return useMemo(() => {
    const filteredCards = cards.filter((c) => c.deck_id === deckId);

    if (filteredCards.length === 0) {
      return "bg-secondary";
    }

    const total = filteredCards.reduce(
      (acc, card) => acc + (card.difficulty ?? 0),
      0
    );

    const avg = total / filteredCards.length;

    if (avg === 0) return "bg-secondary";
    if (avg <= 15) return "bg-red-600";
    if (avg <= 30) return "bg-orange-400";
    return "bg-green-500";
  }, [cards, deckId]);
}
