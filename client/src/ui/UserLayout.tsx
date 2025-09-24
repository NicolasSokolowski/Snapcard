import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Deck } from "../store/deck/deckSlice";
import { Card } from "../store/card/cardSlice";
import ScrollToTop from "./ScrollToTop";

export type ItemsListType = Deck | Card;

function UserLayout() {
  const [itemsList, setItemsList] = useState<ItemsListType[]>([]);

  return (
    <div className="relative h-screen-dvh w-full sm:flex">
      <div className="sticky top-0 z-10 flex w-full flex-col justify-center rounded-sm bg-tertiary shadow-right sm:z-50 sm:w-72 sm:max-w-80 md:w-80">
        <NavBar />
        <div className="sticky top-0 z-10 sm:hidden">
          <SearchBar setItemsList={setItemsList} />
        </div>
      </div>
      <div className="scrollbar-hide w-full overflow-y-auto bg-primary">
        <ScrollToTop>
          <div className="sticky top-0 z-10 hidden sm:block">
            <SearchBar setItemsList={setItemsList} />
          </div>
          <Outlet context={{ itemsList, setItemsList }} />
        </ScrollToTop>
      </div>
    </div>
  );
}

export default UserLayout;
