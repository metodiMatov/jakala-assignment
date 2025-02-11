import { Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntery";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./Error.module.scss";
import { RenderOnViewportEntryProps } from "../types";

/**
 * Renders its children when the component enters the viewport for the first time.
 *
 * This component uses an IntersectionObserver to detect when it enters the viewport.
 * Upon entering, it suspends until the children are loaded, providing a fallback
 * loading message. It also catches errors using an ErrorBoundary.
 */

const RenderOnViewportEntry = (props: RenderOnViewportEntryProps) => {
  const {
    children,
    threshold = 0.3,
    root = null,
    rootMargin = "0px 0px 0px 0px",
    ...wrappedDivProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

  return (
    <section role="contentinfo" {...wrappedDivProps} ref={ref}>
      {entered && (
        <Suspense fallback={"Lading..."}>
          <ErrorBoundary
            fallback={
              <div className={styles["error-fallback"]}>
                <h1>Couldn't Load Video</h1>
              </div>
            }
          >
            {children}
          </ErrorBoundary>
        </Suspense>
      )}
    </section>
  );
};

export default RenderOnViewportEntry;
