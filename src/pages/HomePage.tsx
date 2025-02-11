import { lazy, useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation.tsx";
import { SectionWithVideoProps } from "../components/Section/SectionWithVideo.tsx";
import { CONSTANTS } from "../constants";
import RenderOnViewportEntry from "../components/Renderer/RenderOnViewportEntry.tsx";
// import "../styles/components/_skip-to-content.scss";

const HeroVideo = lazy(() => import("../components/Hero/HeroVideo.tsx"));
const SectionWithVideo = lazy(
  () => import("../components/Section/SectionWithVideo.tsx")
);

const mockedData: SectionWithVideoProps[] = [
  {
    videoId: "jUOuwS1QBRQ",
    heading: CONSTANTS.CONTENT.SECTION_HEADING,
    text: CONSTANTS.CONTENT.SECTION_TEXT,
    controls: true,
    autoplay: false,
    playOnScroll: false,
  },
  {
    videoId: "5UsgMYs0fro",
    heading: CONSTANTS.CONTENT.SECTION_HEADING,
    text: CONSTANTS.CONTENT.SECTION_TEXT,
    controls: false,
    autoplay: false,
    playOnScroll: true,
  },
];
function HomePage() {
  const [data, setData] = useState<SectionWithVideoProps[]>([]);

  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to Main Content
      </a>
      <header>
        <Navigation></Navigation>
        <HeroVideo
          videoId={"lSXOfkev6Gw"}
          heading={CONSTANTS.CONTENT.HERO_HEADING}
          subtitle={CONSTANTS.CONTENT.HERO_SUBHEADING}
          btnText={CONSTANTS.CONTENT.HERO_BTN_TEXT}
        ></HeroVideo>
      </header>
      <main id="main-content">
        {data.map((item) => {
          return (
            <RenderOnViewportEntry key={item.videoId} threshold={0.3}>
              <SectionWithVideo
                heading={item.heading}
                text={item.text}
                videoId={item.videoId}
                controls={item.controls}
                autoplay={item.autoplay}
                playOnScroll={item.playOnScroll}
              ></SectionWithVideo>
            </RenderOnViewportEntry>
          );
        })}
      </main>
      <footer></footer>
    </>
  );
}

export default HomePage;
