import DeckPicker from "./DeckPicker";
import { Link, useOutletContext } from "react-router-dom";
import { Deck } from "../../../store/deck/deckSlice";
import { useEffect } from "react";
import { sortDecks } from "../../../helpers/sortDecks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getDecks } from "../../../store/deck/deckThunk";
import { getAllCardsByUserEmail } from "../../../store/card/cardThunks";

interface UserLayoutContext {
  itemsList: Deck[];
}

function DeckSelection() {
  const { itemsList } = useOutletContext<UserLayoutContext>();
  const sortedDecks = sortDecks(itemsList);
  const dispatch = useAppDispatch();

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
        <Link
          to="/user/training/mode"
          className="flex size-80 animate-pop flex-col items-center justify-center rounded-md bg-tertiary shadow-custom-light sm:size-60"
        >
          <span className="font-patua text-9xl text-secondary">&lt;</span>
        </Link>
        {sortedDecks.map((deck) => (
          <DeckPicker key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  );
}

export default DeckSelection;
