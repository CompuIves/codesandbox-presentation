import React from 'react';

import { Fill, Layout, Heading, List, ListItem } from 'spectacle';

export default ({ id }: { id: string }) => (
  <Fill>
    <Heading>Goals</Heading>
    <Layout>
      <List>
        <ListItem>Remove the learning curve</ListItem>
        <ListItem>Give a local editor experience</ListItem>
        <ListItem>Encourage sharing + discovery</ListItem>
      </List>
    </Layout>
  </Fill>
);
