import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';

const Quotes = () => (
  <Container>
    <Grid container columns={3}>
      <Grid.Column textAlign="center">
        <Image
          src="https://s3.amazonaws.com/edabit-images/testimonial002.jpg"
          size="tiny"
          circular
          centered
        />
        <Header as="h2">Anjali</Header>
        <i>
          "Extremely well done and an excellent example of learning by doing.
          Perfect execution."
        </i>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image
          src="https://s3.amazonaws.com/edabit-images/testimonial001.jpg"
          size="tiny"
          circular
          centered
        />
        <Header as="h2">Martin</Header>
        <i>
          "I swear, Edabit has been more useful than the last coding bootcamp I
          attended. Well done sir."
        </i>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image
          src="https://s3.amazonaws.com/edabit-images/testimonial003.jpg"
          size="tiny"
          circular
          centered
        />
        <Header as="h2">Simon</Header>
        <i>
          "I just spent the past five hours on Edabit and I don't even feel bad
          about it. This is addictive stuff!"
        </i>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Quotes;
