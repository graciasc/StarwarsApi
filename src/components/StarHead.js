import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default function Head() {
  return (
    <Segment inverted>
      <Header as='h1' inverted color='blue' content='Starship' />
    </Segment>
  );
}
