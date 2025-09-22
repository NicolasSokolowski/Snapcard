import { useNavigate } from "react-router-dom";
import { Deck } from "../../../store/deck/deckSlice";
import { useAppSelector } from "../../../store/hooks";
import { useMemo, useRef } from "react";
import { selectCardsByDeckId } from "../../../store/card/cardSelector";
import { useTranslation } from "react-i18next";
import { useResponsiveHeight } from "../../../helpers/useResponsiveHeight";

export interface DeckProps {
  deck: Deck;
}

function DeckPicker({ deck }: DeckProps) {
  const selectDeckCards = useMemo(
    () => selectCardsByDeckId(deck.id),
    [deck.id]
  );
  const cards = useAppSelector(selectDeckCards);
  const navigate = useNavigate();
  const { t } = useTranslation("training");
  const ref = useRef<HTMLDivElement>(null);
  const showImage = useResponsiveHeight(ref, 85, 64, 64);

  return (
    <div
      className={`flex size-80 animate-pop flex-col items-center justify-between rounded-md ${cards.length > 0 ? "bg-tertiary" : "bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_20px,#d1d5db_20px,#d1d5db_40px)]"} ${showImage ? "justify-between bg-[url('/images/deck.png')] bg-cover" : ""} pt-3 shadow-custom-light sm:size-60`}
    >
      <h3
        ref={ref}
        className="w-full break-keep px-2 text-center font-patua text-xl text-textPrimary sm:text-lg"
      >
        {deck.name}
      </h3>
      <div className="flex h-16 w-full items-center justify-center">
        {cards.length > 0 ? (
          <img
            src="/images/training.png"
            alt="Training icon"
            className="w-16"
            draggable={false}
            onClick={() => navigate("/training", { state: { cards } })}
          />
        ) : (
          <span className="font-patua text-xl text-textPrimary">
            {t("emptyDeck")}
          </span>
        )}
      </div>
    </div>
  );
}

export default DeckPicker;
