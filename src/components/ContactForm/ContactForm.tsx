import { Box, Button, Paper, Textarea, TextInput, Text } from "@mantine/core";
import styles from "./ContactForm.module.css";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { notifications } from "@mantine/notifications";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_company: "",
    message: ""
  });
  const [error, setError] = useState<string | null>(null);

  const { isMobile } = useResponsiveDesign();

  const form = useRef();

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    try {
      if (
        formData.user_name.length == 0 ||
        formData.user_email.length == 0 ||
        formData.message.length == 0
      ) {
        setFormData({
          user_name: "",
          user_email: "",
          user_company: "",
          message: ""
        });

        setError("Email, name, and message are required.");

        return notifications.show({
          color: "crimson",
          radius: "md",
          title: "Error sending email!",
          message: "Email, name, and message are required."
        });
      }

      await emailjs.sendForm(
        "service_dw40vid",
        "template_rpbdm2h",
        form.current ?? "",
        {
          publicKey: "tcvghC_602qwzMEG2"
        }
      );

      setFormData({
        user_name: "",
        user_email: "",
        user_company: "",
        message: ""
      });

      notifications.show({
        color: "#DD1155",
        radius: "md",
        title: "Email Sent!",
        message: "I'll get back to you soon."
      });
    } catch (err: any) {
      console.log("FAILED...", err.text);
    }
  };

  const handleFormChange = (e: { target: { name: string; value: any } }) => {
    setFormData((prev) => {
      if (prev) {
        return {
          ...prev,
          [e.target.name]: e.target.value
        };
      }

      return prev;
    });
  };
  return (
    <Paper
      component="form"
      ref={form as any}
      onSubmit={sendEmail}
      shadow="xl"
      radius="lg"
      p="xl"
      style={{ background: "#222121", width: isMobile ? "100%" : "70%" }}
    >
      <TextInput
        c="#FBF5F3"
        label="Name"
        placeholder="Enter your name"
        classNames={{ label: !isMobile ? styles.label : "" }}
        style={{
          margin: "3%",
          boxShadow: "7px 11px 0px -7px rgba(221,17,85,0.9)"
        }}
        value={formData.user_name}
        name="user_name"
        onChange={(e) => handleFormChange(e)}
      />
      <TextInput
        c="#FBF5F3"
        label="Email"
        placeholder="Enter your email"
        classNames={{ label: !isMobile ? styles.label : "" }}
        style={{
          margin: "3%",
          boxShadow: "7px 11px 0px -7px rgba(221,17,85,0.9)"
        }}
        value={formData.user_email}
        name="user_email"
        onChange={(e) => handleFormChange(e)}
      />
      <TextInput
        c="#FBF5F3"
        label="Company"
        placeholder="Enter your company"
        classNames={{ label: !isMobile ? styles.label : "" }}
        style={{
          margin: "3%",
          boxShadow: "7px 11px 0px -7px rgba(221,17,85,0.9)"
        }}
        value={formData.user_company}
        name="user_company"
        onChange={(e) => handleFormChange(e)}
      />
      <Textarea
        c="#FBF5F3"
        label="Message"
        placeholder="Enter your message"
        classNames={{ label: !isMobile ? styles.label : "" }}
        autosize
        minRows={2}
        maxRows={4}
        style={{
          margin: "3%",
          boxShadow: "7px 11px 0px -7px rgba(221,17,85,0.9)"
        }}
        onChange={(e) => handleFormChange(e)}
        name="message"
        value={formData.message}
      />
      {error && (
        <Text c="crimson" fw={500} size="18px" style={{ margin: "3%" }}>
          {error}
        </Text>
      )}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: "3%"
        }}
      >
        <Button
          variant="filled"
          color="#DD1155"
          size={!isMobile ? "lg" : "sm"}
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
