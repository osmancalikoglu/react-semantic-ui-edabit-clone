import React from 'react';
import { Container, Grid, Header, Button } from 'semantic-ui-react';
import MainForm from './MainForm';

const HeaderMain = () => (
  <>
    <div id="navbarShadow" />
    <Container id="Main">
      <Grid container>
        <Grid.Column width={9} verticalAlign="middle">
          <Header inverted size="huge" as="h1">
            Learn to code with interactive challenges
          </Header>
          <Header inverted as="h2">
            <i>It's the fastest, easiest, most addictive way to learn.</i>
          </Header>
          <Button size="huge" inverted>
            Watch Demo
          </Button>
          <Button size="huge" inverted>
            Explore Challenges
          </Button>
        </Grid.Column>
        <MainForm />
      </Grid>
    </Container>
  </>
);

export default HeaderMain;
