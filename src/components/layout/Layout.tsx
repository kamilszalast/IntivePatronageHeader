import React, { FC } from "react";

interface LayoutProps {}

const Layout: FC<LayoutProps> = (props) => {
  return <div>{props.children}</div>;
};

export default Layout;
