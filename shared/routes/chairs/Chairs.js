import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'utils/config';

import Segment from 'components/segment';
import Button from 'components/button';
import ChairSet from './chair-set/ChairSet'

import s from './Chairs.scss';

export default class Chairs extends Component {
  render() {
    return (
      <div>
        <Helmet title="Chairs" />

        <section>

          <div className="">
          </div>

        </section>

        <Segment>

          {/*<h1>{config('welcomeMessage')}</h1>*/}
          <div className={ s.subTitle__container }>
            <span className={ s.subTitle__text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <ChairSet />
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
