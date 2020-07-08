import React from "react";

import { Fill, Layout, Heading, List, ListItem } from "spectacle";

export default ({ id }: { id: string }) => (
  <Fill>
    <Heading>Goals</Heading>
    <Layout>
      <List>
        <ListItem>Lower the learning curve</ListItem>
        <ListItem>Encourage sharing & discovery</ListItem>
        <ListItem>Give a local editor experience</ListItem>
      </List>
    </Layout>
  </Fill>
);
