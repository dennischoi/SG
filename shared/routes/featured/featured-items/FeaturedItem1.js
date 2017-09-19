import React, { Component } from 'react';

import config from 'utils/config';

// Imgs for first Set items
// Chairs
import Chair1 from 'assets/images/Chairs/sg_chair_1.JPG';
import Chair2 from 'assets/images/Chairs/sg_chair_2.JPG';



// Desks
import Desk1 from 'assets/images/Desks/sg_desk_1.JPG';
import Desk2 from 'assets/images/Desks/sg_desk_2.JPG';

// Counters
import Counter1 from 'assets/images/Counters/sg_counter_1.JPG';
import Counter2 from 'assets/images/Counters/sg_counter_2.JPG';


import s from './FeaturedItem.scss';
import g from '../../grid/components/grid/Grid.scss'

export default class FeaturedItem1 extends Component {
  render() {
    return (
      <section> 
        <div className={ s.fItem__section }>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Chair1} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Counter1} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Desk1} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>


          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Desk2} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Chair2} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <div className={s.fItem__title}>
              <span className={s.fItem__titleText}>Lorem Ipsum</span>
            </div>
            <div className={s.fItem__content}>
              <img src={Counter2} className={s.fItem__contentImg} />
            </div>
            <div className={s.cItem__detail}>
              <span className={s.cItem__detailText}>Test</span>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
