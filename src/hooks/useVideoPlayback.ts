import { useEffect, useRef } from "react";
import useYouTubePlayer from "./useYouTubePlayer";
import useInViewport from "./useInViewport";
import { UseVideoPlaybackProps } from "../components/types";

/**
 * Custom hook to manage video playback using YouTube API.
 */

const useVideoPlayback = (props: UseVideoPlaybackProps) => {
  const {
    videoId,
    height = 1000,
    autoplay = false,
    controls = false,
    mute = true,
    playOnScroll = true,
    viewportThreshold = 0.3,
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { playerRef, player } = useYouTubePlayer({
    videoId,
    height,
    autoplay,
    controls,
    mute,
  });

  const isInView = useInViewport({
    elementRef: wrapperRef,
    threshold: viewportThreshold,
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

  return {
    wrapperRef,
    playerRef,
    player,
    isInView,
  };
};

export default useVideoPlayback;
