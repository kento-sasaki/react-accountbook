/** @jsx jsx */
import React, { FC, useState, SyntheticEvent } from "react";
import { jsx, css } from "@emotion/core";
import { Menu, Container, MenuItemProps } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { colors } from "../../styles/colors";
import { pages, Page } from "../../pages";
import { User } from "../../interfaces";

const wrapper = css`
  background: ${colors.appBar};
  margin-bottom: 1rem !important;
`;

interface AppBarProps {
  currentUser?: User | null;
}

export const AppBar: FC<AppBarProps> = ({ currentUser }) => {
  const [activeItem, setActiveItem] = useState("home");
  const history = useHistory();

  const handleItemClick = (e: SyntheticEvent, { name }: MenuItemProps) => {
    if (name) {
      setActiveItem(name);
      const pageName = name as Page;
      history.push(pages[pageName].path);
    }
  };

  const handleLogoutClick = async () => {
    await logout();
    history.push("/");
  };

  return (
    <Menu secondary fixed="top" size="huge" css={wrapper} pointing>
      <Container>
        <Menu.Item onClick={handleItemClick} name="home" active={activeItem === "home"}>
          Home
        </Menu.Item>
        <Menu.Item onClick={handleItemClick} name="about" active={activeItem === "about"}>
          About
        </Menu.Item>
        <Menu.Item onClick={handleItemClick} name="contact" active={activeItem === "contact"}>
          Contact
        </Menu.Item>
        <Menu.Item
          onClick={currentUser ? handleLogoutClick : handleItemClick}
          name={currentUser ? "logout" : "login"}
          active={activeItem === "login" || activeItem === "logout"}
          position="right"
        >
          {currentUser ? "Log out" : "Log in"}
        </Menu.Item>
      </Container>
    </Menu>
  );
};
