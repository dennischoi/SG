import React, { Component } from 'react';

import config from 'utils/config';

// Imgs for first Set items
// Desks
import Desk2 from 'assets/images/Desks/sg_desk_2.JPG';
// Counters
import Counter1 from 'assets/images/Counters/sg_counter_1.JPG';
import Counter2 from 'assets/images/Counters/sg_counter_2.JPG';

import s from './FeaturedItem.scss';
import g from '../../grid/components/grid/Grid.scss'

export default class ChairItem1 extends Component {
  render() {
    return (
      <section className={ s.fItem__section }> 
        
          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <a>
              <div className={s.fItem__case}>
                <div className={s.fItem__content}>
                  <img src={Counter1} className={s.fItem__contentImg} />
                  <div className={s.fItem__overlay}>
                    <div className={s.fItem__title}>
                      <span className={s.fItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.fItem__titleExtra }>
                        <a className={ s.fItem__Fav }></a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <a>
              <div className={s.fItem__case}>
                <div className={s.fItem__content}>
                  <img src={Counter2} className={s.fItem__contentImg} />
                  <div className={s.fItem__overlay}>
                    <div className={s.fItem__title}>
                      <span className={s.fItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.fItem__titleExtra }>
                        <a className={ s.fItem__Fav }></a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className={s(s.fItem__gridCol, s.fItem__each)}>
            <a>
              <div className={s.fItem__case}>
                <div className={s.fItem__content}>
                  <img src={Desk2} className={s.fItem__contentImg} />
                  <div className={s.fItem__overlay}>
                    <div className={s.fItem__title}>
                      <span className={s.fItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.fItem__titleExtra }>
                        <a className={ s.fItem__Fav }></a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
      </section>
    );
  }
}
