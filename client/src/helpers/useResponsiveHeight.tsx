import { useEffect, useState } from "react";

export function useResponsiveHeight(
  ref: React.RefObject<HTMLElement>,
  mobileThreshold: number,
  tabletThreshold: number,
  desktopThreshold: number
) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let observer: ResizeObserver | null = null;

    const update = (el: HTMLElement) => {
      const height = el.offsetHeight;
      const width = window.innerWidth;

      let threshold = desktopThreshold;
      if (width < 575) {
        threshold = mobileThreshold;
      } else if (width < 1024) {
        threshold = tabletThreshold;
      }

      setShowImage(height < threshold);
    };

    const init = () => {
      if (!ref.current) return;

      update(ref.current);

      observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          update(entry.target as HTMLElement);
        }
      });

      observer.observe(ref.current);
    };

    init();

    const interval = setInterval(() => {
      if (ref.current) {
        init();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      if (observer) observer.disconnect();
      clearInterval(interval);
    };
  }, [ref, mobileThreshold, tabletThreshold, desktopThreshold]);

  return showImage;
}
