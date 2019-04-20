import React from 'react';
import { Grid, Segment, Form, Button } from 'semantic-ui-react';

const MainForm = () => (
  <Grid.Column width={7} verticalAlign="middle">
    <Segment>
      <Form>
        <Form.Group widths="equal">
          <Button color="facebook" size="large" fluid>
            Sign in with Facebook
          </Button>
          <Button color="google plus" size="large" fluid>
            Sign in with Google
          </Button>
        </Form.Group>
        <Form.Input
          placeholder="Pick a username"
          icon="user"
          iconPosition="left"
        />
        <Form.Input
          placeholder="Your email adress"
          icon="mail"
          iconPosition="left"
        />
        <Form.Input
          placeholder="Create a password"
          icon="lock"
          iconPosition="left"
        />
        <Button color="green" type="submit" fluid>
          Create My Free Account
        </Button>
      </Form>
    </Segment>
  </Grid.Column>
);

export default MainForm;
