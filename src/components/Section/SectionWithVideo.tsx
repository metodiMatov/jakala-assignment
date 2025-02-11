import React, { useEffect, useRef } from "react";
import styles from "../Video.module.scss";
import useYouTubePlayer from "../../hooks/useYouTubePlayer.ts";
import useInViewport from "../../hooks/useInViewport.ts";
import { v4 as uuidv4 } from "uuid";

export interface SectionWithVideoProps {
  heading?: string;
  text?: string;
  videoId?: string;
  autoplay?: boolean;
  controls?: boolean;
  playOnScroll?: boolean;
}

const SectionWithVideo: React.FC<SectionWithVideoProps> = (
  props: SectionWithVideoProps
) => {
  const componentId = uuidv4();
  const {
    heading = "",
    text = "",
    videoId = "",
    autoplay = false,
    controls = false,
    playOnScroll = false,
  } = props;

  const { playerRef, player } = useYouTubePlayer({
    videoId: videoId,
    height: 1000,
    autoplay: autoplay,
    controls: controls,
    mute: playOnScroll,
  });

  const wprRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport({
    elementRef: wprRef,
    threshold: 0.4,
  });

  useEffect(() => {
    if (!player || !playOnScroll) {
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
  }, [isInView, player, playOnScroll]);

  return (
    <section
      aria-labelledby={`video-heading-section-${componentId}`}
      aria-live="polite"
      role="presentation"
    >
      <div className={styles["video-section"]}>
        <div className="container">
          <hgroup
            id={`video-heading-section-${componentId}`}
            className={styles["video-section__heading-group"]}
            role="group"
            aria-roledescription="Heading group"
          >
            <h2 className={styles["video-section__heading"]}>{heading}</h2>
            <p className={styles["video-section__text"]}>{text}</p>
          </hgroup>
          <div ref={wprRef} className={styles["video-wpr"]}>
            <div ref={playerRef} id={`ytplayer-${videoId}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWithVideo;
