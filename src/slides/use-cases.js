import React from 'react';

import { Fill, Layout, Heading, List, ListItem } from 'spectacle';

export default ({ id }: { id: string }) => (
  <Fill>
    <Heading>Use Cases</Heading>
    <Layout>
      <Fill>
        <List>
          <ListItem>Learning</ListItem>
          <ListItem>Interviews</ListItem>
          <ListItem>Bug Reports</ListItem>
          <ListItem>Prototyping</ListItem>
        </List>
      </Fill>
      <Fill>
        <List>
          <ListItem>Teaching</ListItem>
          <ListItem>Examples</ListItem>
        </List>
      </Fill>
    </Layout>
  </Fill>
);
