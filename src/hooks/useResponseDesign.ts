import { useMediaQuery } from "@mantine/hooks";

export const useResponsiveDesign = () => {
  const isMobile = useMediaQuery("(max-width: 760px)");
  const isSmallTablet = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  return {
    isMobile,
    isSmallTablet,
    isTablet
  };
};
