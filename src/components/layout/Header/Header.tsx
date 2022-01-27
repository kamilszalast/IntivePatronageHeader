import { useState } from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";

export default function Header() {
  //using useState to define and set state to opened or closed menu (now only the menu button changes)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      {/* Simple logo, now only as String */}
      <Logo></Logo>
      <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle>
      {/* Place for Menu Component Wrapper in MenuLinks probably */}
    </NavBarContainer>
  );
}
