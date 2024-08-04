import { Container, Text, Button } from "@mantine/core";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

interface GetToKnowMeProps {
  contactIntoView: any;
}

const GetToKnowMe = ({ contactIntoView }: GetToKnowMeProps) => {
  const { isSmallTablet } = useResponsiveDesign();

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
        padding: "3%"
      }}
    >
      <Text
        c="#FBF5F3"
        fw={600}
        size="24px"
        style={{ borderBottom: "2px dotted #DD1155", paddingBottom: "3%" }}
      >
        Get to know me<span style={{ color: "#DD1155" }}>.</span>
      </Text>
      <br />
      <Text c="#FBF5F3">
        I'm a dedicated Front-end Web Developer with three years of experience
        in creating and managing dynamic web applications. My expertise lies in
        using TypeScript and various JavaScript frameworks to build full-stack
        solutions that contribute to the success of the overall product.
      </Text>
      <br />
      <Text c="#FBF5F3">
        I'm passionate about exploring new technologies and continuously
        enhancing my skill set. I enjoy sharing the knowledge I've gained over
        the years with the developer community.
      </Text>
      <br />
      <Text c="#FBF5F3">
        I am actively seeking new roles as a Front-end Web Developer where I can
        contribute, learn, and grow. If you have an opportunity that aligns with
        my skills and experience, please don't hesitate to contact me.
      </Text>
      <br />
      <Button
        onClick={() => contactIntoView()}
        variant="filled"
        color="#DD1155"
        c="#FBF5F3"
      >
        Contact Me
      </Button>
    </Container>
  );
};

export default GetToKnowMe;
