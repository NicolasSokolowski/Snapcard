import { useEffect, useState } from "react";

export function useResponsiveHeight(
  ref: React.RefObject<HTMLElement>,
  mobileThreshold: number,
  tabletThreshold: number,
  desktopThreshold: number
) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const update = (height: number) => {
      const width = window.innerWidth;

      let threshold = desktopThreshold;
      if (width < 575) {
        threshold = mobileThreshold;
      } else if (width < 1024) {
        threshold = tabletThreshold;
      }

      setShowImage(height < threshold);
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        update(entry.contentRect.height);
      }
    });

    observer.observe(ref.current);

    update(ref.current.offsetHeight);

    return () => observer.disconnect();
  }, [ref, mobileThreshold, tabletThreshold, desktopThreshold]);

  return showImage;
}
