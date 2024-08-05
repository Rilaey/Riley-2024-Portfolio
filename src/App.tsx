import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import SocialSticker from "./components/SocialSticker/SocialSticker.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { useScrollIntoView } from "@mantine/hooks";
import { useResponsiveDesign } from "./hooks/useResponseDesign.ts";

function App() {
  const { isMobile } = useResponsiveDesign();
  const { scrollIntoView: homeIntoView, targetRef: homeTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 300
    });

  const { scrollIntoView: aboutIntoView, targetRef: aboutTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: isMobile ? 130 : 110
    });

  const { scrollIntoView: projectIntoView, targetRef: projectTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: isMobile ? 120 : 110
    });

  const { scrollIntoView: contactIntoView, targetRef: contactTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: isMobile ? 120 : 110
    });
  return (
    <>
      <NavigationBar
        homeIntoView={homeIntoView}
        aboutIntoView={aboutIntoView}
        projectIntoView={projectIntoView}
        contactIntoView={contactIntoView}
      />
      <SocialSticker />
      <Hero targetRef={homeTargetRef} aboutIntoView={aboutIntoView} />
      <AboutMe targetRef={aboutTargetRef} contactIntoView={contactIntoView} />
      <Projects targetRef={projectTargetRef} />
      <Contact targetRef={contactTargetRef} />
      <Footer />
    </>
  );
}

export default App;
