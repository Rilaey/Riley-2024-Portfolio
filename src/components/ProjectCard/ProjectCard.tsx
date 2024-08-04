import { Button, Paper, Text, Image, Box, Container } from "@mantine/core";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

interface ProjectCardProps {
  image: string;
  altText: string;
  title: string;
  description: string;
  github: string;
  application: string;
  tools: string;
}

const ProjectCard = ({
  image,
  altText,
  title,
  description,
  github,
  application,
  tools
}: ProjectCardProps) => {
  const { isTablet, isMobile } = useResponsiveDesign();

  return (
    <Paper
      shadow="md"
      radius="lg"
      style={{
        background: "#222121",
        display: "flex",
        flexDirection: isTablet ? "column" : "row",
        alignItems: "center",
        padding: isMobile ? "10%" : "7%"
      }}
    >
      {!isTablet && (
        <Container
          fluid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Image
            src={image}
            alt={altText}
            h={200}
            w={200}
            style={{ width: "contain", borderRadius: "25px" }}
            m={5}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Button
              variant="filled"
              color="#DD1155"
              c="#FBF5F3"
              component="a"
              href={github}
              m={5}
            >
              Github
            </Button>
            <Button
              variant="filled"
              color="#DD1155"
              c="#FBF5F3"
              component="a"
              href={application}
              m={5}
            >
              Application
            </Button>
          </Box>
        </Container>
      )}
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "2px dotted #DD1155",
              width: "fit-content",
              alignItems: "center"
            }}
          >
            {isTablet && (
              <Image
                src={image}
                alt={altText}
                h={50}
                w={50}
                style={{ width: "contain", borderRadius: "25px" }}
                p={5}
              />
            )}
            <Text c="#FBF5F3" fw={800} size="20px" p={5}>
              {title}
            </Text>
          </Box>
          <br />
          <Text
            c="#FBF5F3"
            fw={400}
            size="16px"
            p={5}
            // style={{ borderBottom: "2px dotted #DD1155", width: "fit-content" }}
          >
            {description}
          </Text>
          <br />
          <Text
            c="#FBF5F3"
            fw={400}
            size="16px"
            p={5}
            // style={{ borderBottom: "2px dotted #DD1155", width: "fit-content" }}
          >
            Built with: {tools}
          </Text>
          <br />
        </Box>
        {isTablet && (
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Button
              variant="filled"
              color="#DD1155"
              c="#FBF5F3"
              component="a"
              href={github}
              m={5}
            >
              Github
            </Button>
            <Button
              variant="filled"
              color="#DD1155"
              c="#FBF5F3"
              component="a"
              href={application}
              m={5}
            >
              Application
            </Button>
          </Box>
        )}
      </Container>
    </Paper>
  );
};

export default ProjectCard;
