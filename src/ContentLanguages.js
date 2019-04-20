import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

const ContentLanguages = () => (
  <Container fluid style={{ backgroundColor: 'rgb(45, 184, 75)' }}>
    <Container>
      <Grid stackable container columns={4}>
        <Grid.Column>
          <Button fluid inverted size="huge">
            C#
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            C++
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            Java
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            JavaScript
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            PHP
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            Python
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            Ruby
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid inverted size="huge">
            Swift
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
);

export default ContentLanguages;
