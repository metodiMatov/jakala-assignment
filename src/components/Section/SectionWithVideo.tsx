import React from "react";
import { SectionWithVideoProps } from "../types";
import styles from "../Video.module.scss";
import useVideoPlayback from "../../hooks/useVideoPlayback";
import { v4 as uuidv4 } from "uuid";

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

  const { wrapperRef, playerRef } = useVideoPlayback({
    videoId,
    autoplay,
    controls,
    mute: playOnScroll,
    playOnScroll,
    viewportThreshold: 0.4,
  });

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
          <div ref={wrapperRef} className={styles["video-wpr"]}>
            <div ref={playerRef} id={`ytplayer-${videoId}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWithVideo;
