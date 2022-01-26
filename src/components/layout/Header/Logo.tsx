import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Intive CMS
      </Text>
    </Box>
  );
}
