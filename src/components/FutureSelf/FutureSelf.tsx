import { Container, Text } from "@mantine/core";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

const FutureSelf = () => {
  const { isSmallTablet, isMobile } = useResponsiveDesign();

  return (
    <Container
      style={{
        maxWidth: isSmallTablet ? "100%" : "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "20px",
        backgroundColor: "#222121",
        borderRadius: "25px",
        padding: isMobile ? "8%" : "3%"
      }}
    >
      <Text
        c="#FBF5F3"
        fw={600}
        size="24px"
        style={{ borderBottom: "2px dotted #DD1155", paddingBottom: "3%" }}
      >
        Currently working on <span style={{ color: "#DD1155" }}>.</span>
      </Text>
      <br />
      <Text c="#FBF5F3">
        I'm currently working on TSMailer, an ambitious project designed to be a
        robust alternative to EmailJS. This tool aims to provide efficient and
        reliable email handling solutions for various applications. Check out
        some of my work in the Projects section.
      </Text>
      <br />
      <Text c="#FBF5F3">
        Another project I'm developing is BetReady, a sports betting analytics
        web app. BetReady focuses on offering insightful data and analysis to
        help users make better-informed betting decisions. Check out some of my
        work in the Projects section.
      </Text>
      <br />
      <Text c="#FBF5F3">
        I'm passionate about sharing the knowledge I've gained over the years in
        web development to help others in the dev community. Feel free to
        connect or follow me on LinkedIn and Twitter, where I post useful
        content related to web development and programming.
      </Text>
    </Container>
  );
};

export default FutureSelf;
