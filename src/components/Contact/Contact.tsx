import { Box, Container, Text } from "@mantine/core";
import styles from "./Contact.module.css";
import ContactForm from "../ContactForm/ContactForm";

interface ContactProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
}

const Contact = ({ targetRef }: ContactProps) => {
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
          Contact <span style={{ color: "#DD1155" }}>.</span>
        </Text>
      </Box>
      <Text c="#FBF5F3" style={{ margin: "3% 0" }} fw={300}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible<span style={{ color: "#DD1155" }}>.</span>
      </Text>
      <ContactForm />
    </Container>
  );
};

export default Contact;
