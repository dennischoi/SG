import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'utils/config';

import Segment from 'components/segment';
import Button from 'components/button';
import FeaturedSet from './featured-set/FeaturedSet'

import s from './Featured.scss';

export default class Featured extends Component {
  render() {
    return (
      <div>
        <Helmet title="Featured" />

        <section>

          <div className="">
          </div>

          <h1>{config('welcomeMessage')}</h1>

          <FeaturedSet />
        </section>

        <Segment>
          <Button>Button</Button>
          <Button href="http://ueno.co">Ueno.co</Button>
          <Button to="/about">About</Button>
        </Segment>
      </div>
    );
  }
}
