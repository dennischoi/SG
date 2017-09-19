import React, { Component } from 'react';

import config from 'utils/config';

import ChairItem1 from '../chair-items/ChairItem1'
import ChairItem2 from '../chair-items/ChairItem2'

import s from './ChairSet.scss';

export default class ChairSet extends Component {
  render() {
    return (
      <div> 
        <ChairItem1 />
        <ChairItem2 />
      </div>
    );
  }
}
