import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';

const MainContent = () => (
  <Container>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column verticalAlign="middle">
          <Image src="https://s3.amazonaws.com/edabit-images/monster001.png" />
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header as="h1">The Fastest Way To Learn</Header>
          <span>
            Everyone knows the fastest way to learn a spoken language is by
            having conversations with native speakers. Likewise, the fastest way
            to learn to code is by actually coding. Edabit offers an almost
            limitless supply of bite-sized challenges, so you can rapidly
            advance your abilities. It's the absolute fastest way to learn.
          </span>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column verticalAlign="middle">
          <Header as="h1">The Easiest Way To Learn</Header>
          <span>
            Do you feel like you’re stuck between learning material that’s too
            easy and material that’s too hard? Once the basics are learned, you
            realize everything is made for either total beginner or an advanced
            coder. Edabit bridges this gap. You start on easy and progress at
            your own pace until you're able to master the toughest challenges.
          </span>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Image src="https://s3.amazonaws.com/edabit-images/monster002.png" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column verticalAlign="middle">
          <Image src="https://s3.amazonaws.com/edabit-images/monster003.png" />
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header as="h1">The Most Addictive Way To Learn</Header>
          <span>
            Edabit simulates what programming is like in the real world while
            removing any tedious, non-educational aspects. We add simple game
            mechanics to make the learning process fun and addictive. Gain XP,
            unlock achievements and level up. You’ll spend hours completing
            challenges and it won't even feel like work.
          </span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default MainContent;
