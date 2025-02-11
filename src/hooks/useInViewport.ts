import { useEffect, useState } from "react";
import { UseInViewportOptions } from "../components/types";

const useInViewport = (props: UseInViewportOptions) => {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.2, elementRef = undefined } = props;

  useEffect(() => {
    const checkVisibility = () => {
      if (!elementRef || !elementRef.current) {
        return;
      }

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visibleThreshold = rect.height * threshold;
      const isVisible =
        rect.top < windowHeight - visibleThreshold &&
        rect.bottom > visibleThreshold;

      setIsInView(isVisible);
    };

    if (!elementRef || !elementRef.current) {
      return;
    }

    // IntersectionObserver for detecting visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: threshold }
    );

    observer.observe(elementRef.current);

    // Backup: Scroll & Wheel event listeners to detect fast scrolling
    const handleEvent = () => requestAnimationFrame(checkVisibility);

    window.addEventListener("scroll", handleEvent, { passive: true });
    window.addEventListener("wheel", handleEvent, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("wheel", handleEvent);
    };
  }, [threshold, elementRef]);

  return isInView;
};

export default useInViewport;
