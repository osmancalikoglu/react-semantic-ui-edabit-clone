import React from 'react';
import { Container, Button, GridColumn } from 'semantic-ui-react';

const HeaderNavbar = () => (
  <Container id="Navbar">
    <a
      href="index.html"
      className="active link item"
      style={{
        float: 'left',
        color: 'white',
        fontFamily: 'Avenir, Ariel, Helvetica Neue, Helvetica',
        fontSize: '2.85rem',
        fontWeight: '600',
        marginLeft: '-18px',
        marginTop: '0px'
      }}
    >
      edabit
    </a>
    <div id="rightNav">
      <Button floated="right" inverted>
        Register
      </Button>
      <Button floated="right" inverted>
        Sign In
      </Button>
    </div>
  </Container>
);

export default HeaderNavbar;
