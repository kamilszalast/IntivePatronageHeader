import { useState } from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";

export default function Header() {
  //using useState to set state of opened or closed menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo></Logo>
      <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle>
    </NavBarContainer>
  );
}
