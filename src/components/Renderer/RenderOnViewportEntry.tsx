import { ReactNode, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntery";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./Error.module.scss";

interface RenderOnViewportEntryProps {
  children: ReactNode;
  threshold: number;
  root?: Element | Document | null | undefined;
  rootMargin?: string;
  wrappedDivProps?: null;
}
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
