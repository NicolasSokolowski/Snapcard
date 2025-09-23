import { useEffect, useRef, useState } from "react";
import { Card } from "../../store/card/cardSlice";
import CardModification from "./CardModification";
import CardDeletion from "./CardDeletion";
import { useResponsiveHeight } from "../../helpers/useResponsiveHeight";

export interface CardProps {
  card: Card;
}

type Action = "none" | "edit-front" | "edit-back" | "delete-front";

function CardDetails({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeAction, setActiveAction] = useState<Action>("none");
  const [visibleAction, setVisibleAction] = useState<Action>("none");
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const showFrontImage = useResponsiveHeight(frontRef, 95, 70, 70);
  const showBackImage = useResponsiveHeight(backRef, 95, 70, 70);
  const [cardDifficultyIndicator, setCardDifficultyIndicator] =
    useState<string>("");

  useEffect(() => {
    if (card.difficulty === "new") {
      setCardDifficultyIndicator("bg-secondary");
    } else if (card.difficulty === "hard") {
      setCardDifficultyIndicator("bg-red-600");
    } else if (card.difficulty === "medium") {
      setCardDifficultyIndicator("bg-orange-400");
    } else {
      setCardDifficultyIndicator("bg-green-500");
    }
  }, [setCardDifficultyIndicator, card]);

  const isEdit = activeAction.startsWith("edit");

  useEffect(() => {
    if (activeAction === "none") {
      const timeout = setTimeout(() => {
        setVisibleAction("none");
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setVisibleAction(activeAction);
    }
  }, [activeAction]);

  return (
    <div
      className={`flip-box-deck relative animate-pop ${isFlipped ? "flip-left" : ""}`}
    >
      <div className="flip-box-inner">
        {/* Face A */}
        <div className="flip-box-a">
          <div
            className={`flip-card-inner ${
              activeAction === "edit-front"
                ? "flip-vertical"
                : activeAction === "delete-front"
                  ? "flip-vertical-reverse"
                  : ""
            }`}
          >
            <div className="flip-card-front">
              <div
                className={`relative flex size-full flex-col items-center overflow-hidden rounded-md bg-tertiary ${showFrontImage ? "justify-between bg-[url('/images/card.png')] bg-[length:55%] bg-center bg-no-repeat" : "justify-end"} shadow-custom-light`}
                onClick={() => {
                  if (!isEdit) setIsFlipped(true);
                }}
              >
                <div
                  className={`absolute right-0 top-0 size-12 origin-bottom-left -translate-y-12 translate-x-6 rotate-45 overflow-hidden sm:size-8 sm:-translate-y-8 sm:translate-x-4 ${cardDifficultyIndicator}`}
                />
                <h3
                  className={`w-full break-keep px-5 text-center font-patua text-2xl text-textPrimary xs:text-xl sm:text-lg ${!showFrontImage ? "absolute top-24 xs:top-16" : "pt-4 sm:pt-3"}`}
                  ref={frontRef}
                >
                  {card.front}
                </h3>
                <div className="flex h-16 w-full justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAction("edit-front");
                      setIsFlipped(false);
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
                      setActiveAction("delete-front");
                      setIsFlipped(false);
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

            {/* Face A Deletion/Modification forms */}
            {visibleAction === "edit-front" && (
              <div className="flip-card-back">
                <CardModification
                  deckId={card.deck_id}
                  cardId={card.id}
                  card={card}
                  side="front"
                  onCancel={() => setActiveAction("none")}
                />
              </div>
            )}
            {visibleAction === "delete-front" && (
              <div className="flip-card-back">
                <CardDeletion
                  card={card}
                  onCancel={() => setActiveAction("none")}
                />
              </div>
            )}
          </div>
        </div>

        {/* Face B */}
        <div className="flip-box-b-left">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div
                className={`flip-inner ${activeAction === "edit-back" ? "flip-x" : ""}`}
              >
                <div className="flip-face flip-face-front">
                  <div
                    className={`relative flex size-full flex-col items-center rounded-md bg-tertiary ${showBackImage ? "justify-between bg-[url('/images/cardback.png')] bg-[length:55%] bg-center bg-no-repeat" : "justify-end"} shadow-custom-light`}
                    onClick={() => {
                      if (!isEdit) setIsFlipped(false);
                    }}
                  >
                    <h3
                      className={`w-full break-keep px-5 text-center font-patua text-2xl text-textPrimary xs:text-xl sm:px-2 sm:text-lg ${!showBackImage ? "absolute top-24 xs:top-16" : "pt-4 sm:pt-3"}`}
                      ref={backRef}
                    >
                      {card.back}
                    </h3>
                    <div className="flex h-16 w-full justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveAction("edit-back");
                        }}
                      >
                        <img
                          src="/images/modification.png"
                          alt="Modification icon"
                          className="w-16"
                          draggable={false}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Face B modification form */}
                {visibleAction === "edit-back" && (
                  <div className="flip-face flip-face-back">
                    <CardModification
                      deckId={card.deck_id}
                      cardId={card.id}
                      card={card}
                      side="back"
                      onCancel={() => setActiveAction("none")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
