import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
interface MenuToggleProps {
  toggle: MouseEventHandler;
  isOpen: boolean;
}

export default function MenuToggle(props: MenuToggleProps) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
      {props.isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}
