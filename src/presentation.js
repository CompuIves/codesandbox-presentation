// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Image,
  S,
  Notes,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Introduction from './slides/introduction';
import CodeSandbox from './slides/codesandbox';
import Birthday from './slides/birthday';
import EditorEmbed from './slides/editor-embed';
import Why from './slides/why';
import UseCases from './slides/use-cases';
import Values from './slides/values';

import stIves from './images/st-ives.jpg';
import workingsImage from './images/Workings.png';
import errorImage from './images/error-suggestion.png';
import templates from './images/templates.png';
import apiImage from './images/codesandbox-api.png';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    background: '#24282A',
    background2: '#1C2022',
    background3: '#374140',
    primary: '#FFD399',
    primaryText: '#7F694C',
    secondary: '#6CAEDD',
    white: '#E0E0E0',
    gray: '#C0C0C0',
    black: '#74757D',
    green: '#5da700',
    redBackground: '#400000',
    red: '#F27777',
  },
  {
    primary: {
      name: 'Montserrat',
      googleFont: true,
      styles: ['400', '300', '500', '700'],
    },
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={1280}
        contentHeight={720}
        transitionDuration={300}
        theme={theme}
      >
        <Slide bgColor="background">
          <Introduction />
        </Slide>
        <Slide bgColor="background">
          <Notes>
            <div>
              I felt helpless because I couldn't help them in an easy way. We
              were sending code snippets over in Slack, and I had to interpret
              all examples in my mind.
            </div>
          </Notes>
          <Image height={750} src={stIves} />
        </Slide>
        <Slide bgColor="background">
          <Notes>
            <div>
              I think this has been said for many different kind of applications
              already
            </div>
          </Notes>
          <Text fit textColor="white">
            What if I put my local dev environment{' '}
            <span style={{ color: '#6CAEDD' }}>on the web?</span>
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Notes>
            <div>
              Now these 2 words are crucial, as it allows us to optimize for
              this environment
            </div>
          </Notes>
          <CodeSandbox />
        </Slide>

        {/* How it works */}
        <Slide bgColor="background">
          <Image src={workingsImage} height={700} />
        </Slide>

        <Slide bgColor="background">
          <Values />
        </Slide>

        {/* Learning curve */}
        <Slide bgColor="background">
          <Notes>
            <div>
              You should be able to create something before having to grasp it
              all
            </div>
          </Notes>
          <Text fit caps textColor="white">
            Remove the learning curve
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Remove the learning curve image (1)
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Remove the learning curve image (2)
          </Text>
        </Slide>
        <Slide bgColor="background">
          <Notes>
            <div>
              We replace the local tooling, which allows us to streamline it for
              web application development specifically
            </div>
          </Notes>
          <Text fit caps textColor="white">
            Remove the learning curve image (3)
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text caps textColor="white">
            <div style={{ marginBottom: '1rem' }}>
              You shouldn't learn from{' '}
              <span style={{ color: '#6CAEDD' }}>bottom up</span>
            </div>
            <div>
              You should learn from{' '}
              <span style={{ color: '#6CAEDD' }}>top down</span>
            </div>
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">Error Handling</Text>
          <a href="https://codesandbox.io/s/wz1lpvjxw" target="_blank">
            <Image width="100%" src={errorImage} />
          </a>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">Default Templates</Text>

          <Image width="100%" src={templates} />
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">CodeSandbox API</Text>
          <a href="https://codesandbox.io/s/vmomkqnkq7" target="_blank">
            <Image height="100%" src={apiImage} />
          </a>
        </Slide>

        {/* Local editor experience */}
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Local editor experience
          </Text>
        </Slide>

        {/* Sharing + Discovery */}
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Encourage sharing + discovery
          </Text>
        </Slide>
      </Deck>
    );
  }
}
