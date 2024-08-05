import { Box, Button, Container, Text } from "@mantine/core";
import styles from "./Hero.module.css";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

interface HeroProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
  aboutIntoView: any;
}

const Hero = ({ targetRef, aboutIntoView }: HeroProps) => {
  const handleAboutTransition = () => {
    aboutIntoView();
  };

  const { isMobile } = useResponsiveDesign();
  return (
    <Container
      ref={targetRef}
      fluid
      className={styles.containerEl}
      style={{ padding: "15%", height: "85%" }}
    >
      <Text c="#FBF5F3" fw={800} size={isMobile ? "22px" : "30px"}>
        Hello, I'm Riley Newhart<span style={{ color: "#DD1155" }}>.</span>
      </Text>
      <br />
      <Text c="#FBF5F3" fw={500} size={isMobile ? "18px" : "22px"} m={5}>
        A results-driven Web Developer specializing in building and managing
        websites and web applications that drive overall product success.
      </Text>
      <br />
      <Box
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between"
        }}
      >
        <Button
          variant="filled"
          color="#DD1155"
          c="#FBF5F3"
          size={isMobile ? "sm" : "lg"}
          onClick={() => handleAboutTransition()}
          m={5}
        >
          Learn More
        </Button>
        <Button
          variant="filled"
          color="#DD1155"
          c="#FBF5F3"
          size={isMobile ? "sm" : "lg"}
          m={5}
          component="a"
          href="https://docs.google.com/document/d/e/2PACX-1vTBNpogxqOOfC4wxrMWSh7q4IRi0DJoTmLReL1J1RSY_ezy-AM6gVjPDjxnpFDgRUGW-f0ywZuHIXos/pub"
        >
          Resume
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
