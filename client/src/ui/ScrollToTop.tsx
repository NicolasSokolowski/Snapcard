import { useEffect, useRef, PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop({ children }: PropsWithChildren) {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div ref={containerRef} className="scrollbar-hide h-full overflow-y-auto">
      {children}
    </div>
  );
}
