import React, { Component } from 'react';

import config from 'utils/config';

import FeaturedItem1 from '../featured-items/FeaturedItem1'
import FeaturedItem2 from '../featured-items/FeaturedItem2'

import s from './FeaturedSet.scss';

export default class FeaturedSet extends Component {
  render() {
    return (
      <div> 
        <FeaturedItem1 />
        <FeaturedItem2 />
      </div>
    );
  }
}
