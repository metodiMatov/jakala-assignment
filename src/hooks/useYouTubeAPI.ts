import { useEffect, useState } from "react";

/**
 * Custom hook to load and check the readiness of the YouTube IFrame Player API.
 */

const useYouTubeAPI = () => {
  const [isYouTubeReady, setIsYouTubeReady] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const windowObj = window as any;

  useEffect(() => {
    if (windowObj.YT) {
      setIsYouTubeReady(true);
      return;
    }

    if (
      !document.querySelector(
        "script[src='https://www.youtube.com/iframe_api']"
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for API load event
    const checkAPIReady = () => {
      if (windowObj.YT) {
        setIsYouTubeReady(true);
      } else {
        setTimeout(checkAPIReady, 100);
      }
    };

    checkAPIReady();
  }, [windowObj]);

  return isYouTubeReady;
};

export default useYouTubeAPI;
