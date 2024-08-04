import { useState } from "react";
import { Box, Container, Image, Text, Menu, Button, rem } from "@mantine/core";
import styles from "./NavigationBar.module.css";
import ProfilePicture from "../../../public/images/ProfilePicture.png";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";
import {
  IconCategory,
  IconHome,
  IconUser,
  IconBrandProducthunt,
  IconMail
} from "@tabler/icons-react";

interface NavigationBarProps {
  homeIntoView: any;
  aboutIntoView: any;
  projectIntoView: any;
  contactIntoView: any;
}

const NavigationBar = ({
  homeIntoView,
  aboutIntoView,
  projectIntoView,
  contactIntoView
}: NavigationBarProps) => {
  const [isActiveLink, setIsActiveLink] = useState<string | null>(null);

  const { isSmallTablet, isMobile } = useResponsiveDesign();

  const links = [
    {
      targetLink: "Home",
      targetView: homeIntoView,
      icon: <IconHome />
    },
    {
      targetLink: "About",
      targetView: aboutIntoView,
      icon: <IconUser />
    },
    {
      targetLink: "Projects",
      targetView: projectIntoView,
      icon: <IconBrandProducthunt />
    },
    {
      targetLink: "Contact",
      targetView: contactIntoView,
      icon: <IconMail />
    }
  ];
  return (
    <Container fluid className={styles.navContainer}>
      <Box className={styles.nameContainer}>
        <Image
          src={ProfilePicture}
          h={isMobile || isSmallTablet ? 50 : 75}
          w={isMobile || isSmallTablet ? 50 : 75}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
            margin: "15px"
          }}
        />
        <Text
          component="h1"
          c="#FBF5F3"
          fw={600}
          size={isSmallTablet || isMobile ? "18px" : "24px"}
          p={5}
        >
          Riley Newhart
        </Text>
      </Box>
      {!isMobile ? (
        <Box className={styles.linkContainer}>
          {links.map((link) => {
            const activeLink = isActiveLink === link.targetLink;
            return (
              <Text
                fw={600}
                style={{
                  transition: "1s",
                  color: activeLink ? "#DD1155" : "#FBF5F3",
                  fontSize: isSmallTablet ? "18px" : "22px",
                  textDecoration: "none",
                  padding: "15px",
                  cursor: "pointer"
                }}
                key={link.targetLink}
                onMouseEnter={() => setIsActiveLink(link.targetLink)}
                onMouseLeave={() => setIsActiveLink(null)}
                onClick={() => link.targetView()}
              >
                {link.targetLink}
              </Text>
            );
          })}
        </Box>
      ) : (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button variant="filled" color="#DD1155">
              <IconCategory style={{ width: rem(14), height: rem(14) }} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown style={{ zIndex: "99999" }}>
            {links.length > 0 &&
              links.map((item) => {
                return (
                  <Menu.Item
                    key={item.targetLink}
                    leftSection={item.icon}
                    onClick={() => item.targetView()}
                  >
                    {item.targetLink}
                  </Menu.Item>
                );
              })}
          </Menu.Dropdown>
        </Menu>
      )}
    </Container>
  );
};

export default NavigationBar;
