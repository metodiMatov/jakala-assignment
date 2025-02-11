import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that tracks the first entry of a component into the viewport.
 */
declare type observerOptionsProps = {
  threshold: number;
  root?: Element | Document | null | undefined;
  rootMargin?: string;
};

const useFirstViewportEntry = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentRef: any,
  observerOptions: observerOptionsProps
) => {
  const [entered, setEntered] = useState(false);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions
    )
  );

  useEffect(() => {
    if (!componentRef && !componentRef?.current) {
      return;
    }

    const element = componentRef.current;
    const ob = observer.current;

    if (entered) {
      ob.disconnect();
      return;
    }

    if (element && !entered) {
      ob.observe(element);
    }

    return () => ob.disconnect();
  }, [entered, componentRef]);

  return entered;
};

export default useFirstViewportEntry;
