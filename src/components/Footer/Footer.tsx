import { Box, Container, Image, Text } from "@mantine/core";
import socials from "../../../public/data/socials.json";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

const Footer = () => {
  const { isMobile } = useResponsiveDesign();
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#222121",
        marginTop: "5%",
        height: "15vh"
      }}
    >
      <Box>
        <Text c="#FBF5F3" fw={800} style={{ margin: "10px" }}>
          © 2024 | Riley Newhart
        </Text>
      </Box>
      {isMobile && (
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          {socials.map((item) => {
            return (
              <a href={item.href} style={{ margin: "10px" }}>
                <Image src={item.logo} alt={item.altText} h={30} w={30} />
              </a>
            );
          })}
        </Box>
      )}
    </Container>
  );
};

export default Footer;
