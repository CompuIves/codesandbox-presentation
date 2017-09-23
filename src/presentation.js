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

import designImage from './images/design.png';
import firstSandboxImage from './images/first-codesandbox.png';
import secondSandboxImage from './images/second-codesandbox.png';
import thirdSandboxImage from './images/third-codesandbox.png';

import learn1 from './images/learning-curve-1.png';
import learn2 from './images/learning-curve-2.png';
import learn3 from './images/learning-curve-3.png';

import stIves from './images/st-ives.jpg';
import workingsImage from './images/Workings.png';
import workings2Image from './images/workings-2.png';
import errorImage from './images/error-suggestion.png';
import templates from './images/templates.png';
import apiImage from './images/codesandbox-api.png';

import webpackDashboardImage from './images/webpack-dashboard.png';

import searchImage from './images/search.png';
import profileImage from './images/profile.png';
import embedImage from './images/embed.png';
import mediumImage from './images/medium.png';

import cycleImage from './images/cycle.png';
import nowImage from './images/now.png';

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
    black: 'black',
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
        progress="none"
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
          <Image width={1000} src={stIves} />
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
          <Image src={designImage} width={1000} />
        </Slide>

        <Slide bgColor="background">
          <Image src={firstSandboxImage} width={1000} />
        </Slide>

        <Slide bgColor="background">
          <Image src={secondSandboxImage} width={1000} />
        </Slide>

        <Slide bgColor="background">
          <Image src={thirdSandboxImage} width={1000} />
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
          <Image src={workingsImage} width={600} />
        </Slide>

        <Slide bgColor="background">
          <Image src={workings2Image} width={600} />
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
          <Image src={learn1} width="100%" />
        </Slide>
        <Slide bgColor="background">
          <Image src={learn2} width="100%" />
        </Slide>
        <Slide bgColor="background">
          <Notes>
            <div>
              We replace the local tooling, which allows us to streamline it for
              web application development specifically
            </div>
          </Notes>
          <Image src={learn3} width="100%" />
        </Slide>

        <Slide bgColor="background">
          <Text textColor="white">
            Installing tooling should not stand in the way of getting started.
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text caps textColor="white">
            <div style={{ marginBottom: '1rem' }}>
              You shouldn't learn from{' '}
              <span style={{ color: '#6CAEDD' }}>bottom to top</span>
            </div>
            <div>
              You should learn from{' '}
              <span style={{ color: '#6CAEDD' }}>top to bottom</span>
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
          <Text textColor="white" fit>
            <a
              href="https://mattiamanzati.github.io/mobx-state-tree-playground/"
              target="_blank"
              style={{ color: 'white' }}
            >
              https://mattiamanzati.github.io/mobx-state-tree-playground/
            </a>
          </Text>
          <Text textColor="secondary">
            <div style={{ marginTop: '1rem' }}>@mattiamanzati</div>
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">CodeSandbox API</Text>
          <a href="https://codesandbox.io/s/vmomkqnkq7" target="_blank">
            <Image height="100%" src={apiImage} />
          </a>
        </Slide>

        <Slide bgColor="background">
          <Text caps fit lineHeight={1.2} textColor="white">
            <span style={{ color: '#FFD399' }}>UI</span> >{' '}
            <span style={{ color: '#6CAEDD' }}>CODE</span>
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Image height={700} src={webpackDashboardImage} />
        </Slide>

        {/* Sharing + Discovery */}
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Encourage sharing + discovery
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">Search</Text>
          <a href="https://codesandbox.io/search" target="_blank">
            <Image width={1000} src={searchImage} />
          </a>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">Profile</Text>
          <a href="https://codesandbox.io/u/kentcdodds" target="_blank">
            <Image width="100%" src={profileImage} />
          </a>
        </Slide>

        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Github Import and CLI Export
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text fit textColor="white">
            <div style={{ marginBottom: '1rem' }}>
              https://github.com<span style={{ color: '#6CAEDD' }}>
                /reactjs/redux/blob/master/examples/todos
              </span>
            </div>
          </Text>
          <Text fit textColor="white">
            <div>
              <a
                target="_blank"
                href="https://codesandbox.io/s/github/reactjs/redux/blob/master/examples/todos"
                style={{ color: '#E0E0E0', textDecoration: 'none' }}
              >
                https://codesandbox.io/s/github<span
                  style={{ color: '#6CAEDD' }}
                >
                  /reactjs/redux/blob/master/examples/todos
                </span>
              </a>
            </div>
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text textColor="primary">Embedding</Text>

          <EditorEmbed id="new" />
        </Slide>

        <Slide bgColor="background">
          <Image width="100%" src={mediumImage} />
        </Slide>

        {/* Local editor experience */}
        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Local editor experience
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text style={{ fontSize: '5rem' }} textColor="white">
            The future is bright!
          </Text>
          <Layout style={{ marginTop: '3rem' }}>
            <Text textColor="secondary">Service Workers</Text>
            <Text textColor="secondary">Web Workers</Text>
            <Text textColor="secondary">WebAssembly</Text>
          </Layout>
        </Slide>

        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Monaco Editor
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text fit caps textColor="white">
            ESLint + Prettier
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Text fit caps textColor="white">
            Offline Support?
          </Text>
        </Slide>

        <Slide bgColor="background">
          <Image src={cycleImage} width={1000} />
        </Slide>

        <Slide bgColor="black">
          <Image src={nowImage} width={1000} />
        </Slide>

        <Slide bgColor="black">
          <Text textColor="white">
            store.dispatch({'{'} type: "ENABLE_INTEGRATIONS" {'}'})
          </Text>
        </Slide>
      </Deck>
    );
  }
}
