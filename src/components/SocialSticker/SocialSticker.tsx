import { Box, Image } from "@mantine/core";
import socials from "../../../public/data/socials.json";
import styles from "./SocialSticker.module.css";
import { useResponsiveDesign } from "../../hooks/useResponseDesign";

const SocialSticker = () => {
  const { isMobile } = useResponsiveDesign();
  return (
    <>
      {!isMobile && (
        <Box className={styles.socialContainer}>
          {socials.map((social) => {
            return (
              <a
                href={social.href}
                key={social.id}
                className={styles.socialLink}
              >
                <Image
                  src={social.logo}
                  alt={social.altText}
                  h={35}
                  w={35}
                  className={styles.socialImg}
                />
              </a>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default SocialSticker;
