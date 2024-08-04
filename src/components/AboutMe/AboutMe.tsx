import { Box, Container, Text } from "@mantine/core";
import styles from "./AboutMe.module.css";
import GetToKnowMe from "../GetToKnowMe/GetToKnowMe";
import FutureSelf from "../FutureSelf/FutureSelf";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

interface AboutMeProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
  contactIntoView: any;
}

const AboutMe = ({ targetRef, contactIntoView }: AboutMeProps) => {
  const { isSmallTablet } = useResponsiveDesign();
  return (
    <Container
      ref={targetRef}
      fluid
      className={styles.containerEl}
      style={{ height: "85%" }}
    >
      <Box
        style={{
          borderBottom: "3px solid #DD1155"
        }}
      >
        <Text c="#FBF5F3" fw={800} size="38px" style={{ margin: "15% 0" }}>
          About<span style={{ color: "#DD1155" }}>.</span>
        </Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: isSmallTablet ? "column" : "row",
          justifyContent: "center",
          maxWidth: "90%"
        }}
      >
        <GetToKnowMe contactIntoView={contactIntoView} />
        <FutureSelf />
      </Box>
    </Container>
  );
};

export default AboutMe;
