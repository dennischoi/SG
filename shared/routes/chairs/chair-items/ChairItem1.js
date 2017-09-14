import React, { Component } from 'react';

import config from 'utils/config';

// Imgs for first Set items
// Chairs
import Chair1 from 'assets/images/Chairs/sg_chair_1.JPG';
import Chair2 from 'assets/images/Chairs/sg_chair_2.JPG';
import Chair3 from 'assets/images/Chairs/sg_chair_3.JPG';
import Chair4 from 'assets/images/Chairs/sg_chair_4.JPG';
import Chair5 from 'assets/images/Chairs/sg_chair_5.JPG';
import Chair6 from 'assets/images/Chairs/sg_chair_6.JPG';



import s from './ChairItem.scss';
import g from '../../grid/components/grid/Grid.scss'

export default class ChairItem1 extends Component {
  render() {
    return (
      <section> 
        <div className={ s.cItem__section }>
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair1} className={s.cItem__contentImg} />
            </div>
            Test
          </div>
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair2} className={s.cItem__contentImg} />
            </div>
            Test2
          </div>
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair3} className={s.cItem__contentImg} />
            </div>
            Test3
          </div>


          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair4} className={s.cItem__contentImg} />
            </div>
            Test4
          </div>
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair5} className={s.cItem__contentImg} />
            </div>
            Test5
          </div>
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <div className={s.cItem__content}>
              <img src={Chair6} className={s.cItem__contentImg} />
            </div>
            Test6
          </div>
        </div>
      </section>
    );
  }
}
