import { Box, Container, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import styles from "./Projects.module.css";
import projectData from "../../../public/data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

interface ProjectProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
}

const Projects = ({ targetRef }: ProjectProps) => {
  const { isTablet } = useResponsiveDesign();
  const slides = projectData.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProjectCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container
      ref={targetRef}
      fluid
      className={styles.containerEl}
      style={{ height: "85%", width: isTablet ? "100%" : "" }}
    >
      <Box
        style={{
          borderBottom: "3px solid #DD1155"
        }}
      >
        <Text c="#FBF5F3" fw={800} size="38px" style={{ margin: "15% 0" }}>
          Projects <span style={{ color: "#DD1155" }}>.</span>
        </Text>
      </Box>
      <Carousel
        withIndicators
        height="100%"
        style={{
          width: isTablet ? "80%" : "70%",
          margin: "20px"
        }}
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default Projects;
