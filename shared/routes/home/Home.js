import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'utils/config';

import Segment from 'components/segment';
import Button from 'components/button';


import s from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />

        <section>

          <div className={ s.home__bg }>
          </div>

        </section>

        <Segment>

          {/*<h1>{config('welcomeMessage')}</h1>*/}
          <div className={ s.subTitle__container }>
            <span className={ s.subTitle__text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
        </Segment>

        <Segment>
          <Button>Button</Button>
          <Button href="http://ueno.co">Ueno.co</Button>
          <Button to="/about">About</Button>
        </Segment>
      </div>
    );
  }
}
