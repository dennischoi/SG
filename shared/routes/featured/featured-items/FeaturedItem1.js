import React, { Component } from 'react';

import config from 'utils/config';



import s from './FeaturedItem.scss';
import g from '../../grid/components/grid/Grid.scss'

export default class FeaturedItem1 extends Component {
  render() {
    return (
      <section> 
        <div className={ s.fItem__section }>
          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test
          </div>
          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test2
          </div>
          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test3
          </div>

          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test4
          </div>
          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test5
          </div>
          <div className={s(s.fItem__gridImgCol, s.fItem__each)}>
            Test6
          </div>
        </div>
      </section>
    );
  }
}
