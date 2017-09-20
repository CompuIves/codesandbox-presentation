import React from 'react';
import moment from 'moment';

import { Image, S, Text, Layout, Heading, Fill } from 'spectacle';

import newBanner from '../images/NewBannerTransparent.png';

export default class Birthday extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      age: Date.now(),
      sandboxes: 47358,
      characters: 254776139,
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  tick = () => {
    const ONLINE_DATE = moment([2017, 3, 3]);

    const months = moment().diff(ONLINE_DATE, 'months');
    const days = moment().diff(ONLINE_DATE, 'days');
    const seconds = moment().diff(ONLINE_DATE, 'seconds');

    this.setState({
      age: `${months} months, ${days - months * 30} days and ${seconds -
        days * 24 * 60 * 60} seconds`,
      sandboxes: Math.floor(0.003408988 * seconds),
      characters: Math.floor(18.339030674 * seconds),
    });

    this.timeout = setTimeout(this.tick, 100);
  };

  render() {
    const { age, sandboxes, characters } = this.state;

    return (
      <Fill>
        <Heading>🎉🎂🎉</Heading>
        <Text margin="2rem" textColor="white">
          {age}
        </Text>
      </Fill>
    );
  }
}

// <Text margin="2rem" textColor="white">
//   {sandboxes} sandboxes
// </Text>

// <Text margin="2rem" textColor="white">
//   {characters} characters
// </Text>
