/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import useYouTubeAPI from "./useYouTubeAPI";
import { YouTubePlayerOptions } from "../components/types";

/**
 * Custom hook to create a YouTube player instance.
 */
const useYouTubePlayer = (props: YouTubePlayerOptions) => {
  const {
    videoId,
    width = 640,
    height = 360,
    autoplay = false,
    controls = true,
    mute = false,
  } = props;
  const playerRef = useRef<HTMLDivElement | null>(null);
  const isYouTubeReady = useYouTubeAPI();
  const [player, setPlayer] = useState<any>(null);
  const windowObj = window as any;

  useEffect(() => {
    if (!isYouTubeReady || !playerRef.current) {
      return;
    }

    try {
      new windowObj.YT.Player(playerRef.current, {
        height: height.toString(),
        width: width.toString(),
        videoId: videoId,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          controls: controls ? 1 : 0,
          mute: mute ? 1 : 0,
          cc_load_policy: 0,
          rel: 0,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event: Event) => setPlayer(event.target),
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }, [
    isYouTubeReady,
    videoId,
    width,
    height,
    autoplay,
    controls,
    windowObj,
    mute,
  ]);

  return { playerRef, player };
};

export default useYouTubePlayer;
