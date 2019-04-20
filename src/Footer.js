import React from 'react';
import { Divider, Container, List, Dropdown, Flag } from 'semantic-ui-react';

const Footer = () => (
  <Container>
    <Divider />
    <List horizontal>
      <List.Item disabled href="#">
        © 2019 Edabit
      </List.Item>
      <List.Item href="#">Terms</List.Item>
      <List.Item href="#">Privacy</List.Item>
      <List.Item href="#">Roadmap</List.Item>
      <List.Item href="#">Affiliates</List.Item>
    </List>

    <List floated="right" horizontal>
      <List.Item href="#">Contact</List.Item>
      <List.Item href="#">Blog</List.Item>
      <List.Item href="#">About</List.Item>
    </List>
    <Dropdown
      id="languageSelector"
      text="English"
      icon="caret up"
      floating
      labeled
      button
      className="icon"
      upward
    >
      <Dropdown.Menu>
        <Dropdown.Item>
          <Flag name="gb" />
          English
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="es" />
          Espanol
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="fr" />
          Français
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="de" />
          Deutsch
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="br" />
          Português
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="jp" />
          日本語
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="cn" />
          中文
        </Dropdown.Item>
        <Dropdown.Item>
          <Flag name="ru" />
          Pусский
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <br />
    <br />
  </Container>
);

export default Footer;
