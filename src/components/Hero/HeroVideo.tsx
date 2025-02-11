import React from "react";
import EllipseSvg from "../../icons/ellipse";
import styles from "../Video.module.scss";
import { ErrorBoundary } from "react-error-boundary";
import useVideoPlayback from "../../hooks/useVideoPlayback";
import { HeroVideoProps } from "../types";

/**
 * A hero section with a video player and a heading group.
 *
 * The component plays the video automatically on viewport entry.
 */
const HeroVideo: React.FC<HeroVideoProps> = (props: HeroVideoProps) => {
  const { videoId = "", heading = "", subtitle = "", btnText = "" } = props;
  const { wrapperRef, playerRef } = useVideoPlayback({
    videoId,
    autoplay: true,
    controls: false,
    mute: true,
    playOnScroll: true,
    viewportThreshold: 0.3,
  });

  return (
    <section
      aria-labelledby="hero-section-heading"
      aria-live="polite"
      role="presentation"
    >
      <div ref={wrapperRef} className={styles["video-player"]}>
        <div className="container">
          <hgroup
            id="hero-section-heading"
            className={styles["video-player__h-section"]}
            role="group"
            aria-roledescription="Heading group"
          >
            <h1 className={styles["video-player__h-section__heading"]}>
              {heading}
            </h1>
            <p
              className={`${styles["video-player__h-section__text"]} ${styles.h3}`}
              aria-roledescription="subtitle"
            >
              {subtitle}
            </p>
            <a
              className={styles["video-player__h-section__btn"]}
              aria-label={btnText}
              href="#"
            >
              {btnText} <EllipseSvg></EllipseSvg>
            </a>
          </hgroup>
        </div>
        <ErrorBoundary
          fallback={
            <div className={styles["video-player__error"]}>
              <h1>Couldn't Load Video</h1>
            </div>
          }
        >
          <div ref={playerRef} id={`ytplayer-${videoId}`}></div>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default HeroVideo;
