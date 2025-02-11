import { ReactNode } from "react";

export interface HeroVideoProps {
  videoId?: string;
  heading?: string;
  subtitle?: string;
  btnText?: string;
}

export interface SectionWithVideoProps {
  heading?: string;
  text?: string;
  videoId?: string;
  autoplay?: boolean;
  controls?: boolean;
  playOnScroll?: boolean;
}

export interface YouTubePlayerProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
}

export interface UseInViewportOptions {
  threshold?: number;
  elementRef?: React.RefObject<HTMLElement>;
}

export interface UseVideoPlaybackProps {
  videoId: string;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  mute?: boolean;
  playOnScroll?: boolean;
  viewportThreshold?: number;
}

export interface YouTubePlayerOptions {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  mute?: boolean;
}

export interface RenderOnViewportEntryProps {
  children: ReactNode;
  threshold: number;
  root?: Element | Document | null | undefined;
  rootMargin?: string;
  wrappedDivProps?: null;
}
