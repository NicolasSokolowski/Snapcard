import { useOutletContext } from "react-router-dom";
import { Card } from "../../store/card/cardSlice";
import CardDetails from "./CardDetails";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getDecks } from "../../store/deck/deckThunk";
import { getAllCardsByUserEmail } from "../../store/card/cardThunks";

interface UserLayoutContext {
  itemsList: Card[];
}

function AllCardsList() {
  const dispatch = useAppDispatch();
  const { itemsList } = useOutletContext<UserLayoutContext>();

  const hasBeenFetchedOnce = useAppSelector(
    (state) => state.deck.hasBeenFetchedOnce
  );

  useEffect(() => {
    if (!hasBeenFetchedOnce) {
      dispatch(getDecks());
      dispatch(getAllCardsByUserEmail());
    }
  }, [dispatch, hasBeenFetchedOnce]);

  return (
    <div className="scrollbar-hide mt-14 overflow-y-auto bg-primary p-8 sm:mt-0">
      <div className="mb-8 grid grid-cols-[repeat(auto-fit,_20rem)] justify-center gap-8 xs:grid-cols-[repeat(auto-fit,_15rem)] xs:justify-normal">
        {itemsList.map((card) => (
          <CardDetails key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default AllCardsList;
