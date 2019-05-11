import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment inverted vertical position='bottom' >
      <p>
        Created By Gracias Claude <Icon name='copyright' />
      </p>
    </Segment>
  );
}
