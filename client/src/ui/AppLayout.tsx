import { Outlet } from "react-router-dom";
import "../flip.css";
import Footer from "./Footer";
import LastPathSaver from "./LastPathSaver";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <div className="flex h-screen-dvh flex-col">
      <LastPathSaver />
      <main className="scrollbar-hide flex-1 overflow-y-auto bg-primary">
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
