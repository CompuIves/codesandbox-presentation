import React from 'react';
import { Slide, Layout, Heading, Fill, Image, Text } from 'spectacle';

import ivesImage from '../images/ives.png';

export default () => (
  <Layout>
    <Fill>
      <Image width="400px" src={ivesImage} />
    </Fill>
    <Fill textColor="white">
      <Heading margin="2rem" textColor="white" textAlign="left" textSize="3rem">
        Ives van Hoorne
      </Heading>

      <Fill>
        <Text
          margin="1rem 2rem"
          textColor="white"
          textAlign="left"
          textSize="1.5rem"
        >
          Student @ University of Twente
        </Text>
        <Text
          margin="1rem 2rem"
          textColor="white"
          textAlign="left"
          textSize="1.5rem"
        >
          Software Developer @ Catawiki
        </Text>
      </Fill>

      <Text margin="8rem 2rem 0 2rem" textColor="white" textAlign="left">
        https://ives.cool
      </Text>
      <Text margin="1rem 2rem" textColor="white" textAlign="left">
        @compuives
      </Text>
    </Fill>
  </Layout>
);
