import React, { useEffect, useRef } from "react";
import EllipseSvg from "../../icons/ellipse";
import styles from "../Video.module.scss";
import { ErrorBoundary } from "react-error-boundary";
import useYouTubePlayer from "../../hooks/useYouTubePlayer.ts";
import useInViewport from "../../hooks/useInViewport.ts";

interface HeroVideoProps {
  videoId?: string;
  heading?: string;
  subtitle?: string;
  btnText?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = (props: HeroVideoProps) => {
  const { videoId = "", heading = "", subtitle = "", btnText = "" } = props;
  const { playerRef, player } = useYouTubePlayer({
    videoId,
    height: 1000,
    autoplay: true,
    controls: false,
    mute: true,
  });
  const wprRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport({
    elementRef: wprRef,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!player) {
      return;
    }
    const timeoutId = setTimeout(() => {
      if (isInView) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [isInView, player]);

  return (
    <section
      aria-labelledby="hero-section-heading"
      aria-live="polite"
      role="presentation"
    >
      <div ref={wprRef} className={styles["video-player"]}>
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
              className={styles["video-player__h-section__text h3"]}
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
          <div ref={playerRef} id={`ytplayer-${videoId}`}></div>;
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default HeroVideo;
