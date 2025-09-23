import { useRef, useState } from "react";
import { Deck } from "../../store/deck/deckSlice";
import DeckModification from "./DeckModification";
import DeckDeletion from "./DeckDeletion";
import { useNavigate } from "react-router-dom";
import { useResponsiveHeight } from "../../helpers/useResponsiveHeight";
import { useDeckDifficultyIndicator } from "../../helpers/useDeckDifficultyIndicator";

export interface DeckProps {
  deck: Deck;
}

function DeckDetails({ deck }: DeckProps) {
  const [flipSide, setFlipSide] = useState<"none" | "left" | "right">("none");
  const [visibleSide, setVisibleSide] = useState<"none" | "left" | "right">(
    "none"
  );
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const showImage = useResponsiveHeight(ref, 85, 64, 64);
  const difficultyIndicator = useDeckDifficultyIndicator(deck.id);

  const handleModifyClick = () => {
    if (flipSide === "left") {
      setFlipSide("none");
      setTimeout(() => setVisibleSide("none"), 800);
    } else {
      setVisibleSide("left");
      setFlipSide("left");
    }
  };

  const handleDeleteClick = () => {
    if (flipSide === "right") {
      setFlipSide("none");
      setTimeout(() => setVisibleSide("none"), 800);
    } else {
      setVisibleSide("right");
      setFlipSide("right");
    }
  };

  return (
    <div
      className={`flip-box-deck animate-pop ${flipSide === "left" ? "flip-left" : ""} ${flipSide === "right" ? "flip-right" : ""}`}
    >
      <div className="flip-box-inner">
        <div className="flip-box-a">
          <div
            className={`relative flex size-full flex-col items-center overflow-hidden rounded-md bg-tertiary pt-3 shadow-custom-light ${showImage ? "justify-between bg-[url('/images/deck.png')] bg-cover" : ""}`}
            onClick={() => navigate(`/user/decks/${deck.id}/cards`)}
          >
            <div className="flex w-full">
              <div
                className={`absolute right-0 top-0 size-12 origin-bottom-left -translate-y-12 translate-x-6 rotate-45 overflow-hidden sm:size-8 sm:-translate-y-8 sm:translate-x-4 ${difficultyIndicator}`}
              />
              <h3
                ref={ref}
                className="w-full break-keep px-3 text-center font-patua text-xl text-textPrimary sm:text-lg"
              >
                {deck.name}
              </h3>
            </div>
            <div className="absolute bottom-0 flex h-16 w-full justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModifyClick();
                }}
              >
                <img
                  src="/images/modification.png"
                  alt="Modification icon"
                  className="w-16"
                  draggable={false}
                />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick();
                }}
              >
                <img
                  src="/images/deletion.png"
                  alt="Deletion icon"
                  className="w-16"
                  draggable={false}
                />
              </button>
            </div>
          </div>
        </div>
        {visibleSide === "left" && (
          <DeckModification deck={deck} onCancel={() => setFlipSide("none")} />
        )}
        {visibleSide === "right" && (
          <DeckDeletion deck={deck} onCancel={() => setFlipSide("none")} />
        )}
      </div>
    </div>
  );
}

export default DeckDetails;
