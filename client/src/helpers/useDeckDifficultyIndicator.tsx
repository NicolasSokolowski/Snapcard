import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../store/hooks";

export function useDeckDifficultyIndicator(deckId: number) {
  const [deckDifficultyBg, setDeckDifficultyBg] = useState("bg-secondary");

  const cards = useAppSelector((state) => state.card.cards);
  const filteredCards = useMemo(
    () => cards.filter((c) => c.deck_id === deckId),
    [cards, deckId]
  );

  useEffect(() => {
    if (filteredCards.length === 0) {
      setDeckDifficultyBg("bg-secondary");
      return;
    }

    const total = filteredCards.reduce(
      (acc, card) => acc + (card.difficulty ?? 0),
      0
    );

    const avg = total / filteredCards.length;

    let bg = "bg-secondary";
    if (avg === 0) bg = "bg-secondary";
    else if (avg <= 15) bg = "bg-red-600";
    else if (avg <= 30) bg = "bg-orange-400";
    else bg = "bg-green-500";

    setDeckDifficultyBg(bg);
  }, [filteredCards]);

  return deckDifficultyBg;
}
