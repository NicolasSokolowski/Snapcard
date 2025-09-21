import { useOutletContext, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getCardsByDeckId } from "../../store/card/cardThunks";
import CardDetails from "./CardDetails";
import CardCreation from "./CardCreation";
import { Card } from "../../store/card/cardSlice";

interface UserLayoutContext {
  itemsList: Card[];
}

function CardsList() {
  const { deckId } = useParams<{ deckId: string }>();
  const deckIdNumber = parseInt(deckId!, 10);
  const dispatch = useAppDispatch();
  const hasBeenFetchedOnce = useAppSelector(
    (state) => state.deck.hasBeenFetchedOnce
  );

  const { itemsList } = useOutletContext<UserLayoutContext>();

  useEffect(() => {
    if (!hasBeenFetchedOnce) {
      dispatch(getCardsByDeckId(deckIdNumber));
    }
  }, [dispatch, deckIdNumber, hasBeenFetchedOnce]);

  return (
    <div className="scrollbar-hide mt-14 overflow-y-auto bg-primary p-8 sm:mt-0">
      <div className="mb-8 grid grid-cols-[repeat(auto-fit,_20rem)] justify-center gap-8 xs:grid-cols-[repeat(auto-fit,_15rem)] xs:justify-normal">
        <CardCreation deckId={deckIdNumber} />
        {itemsList.map((card) => (
          <CardDetails key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
