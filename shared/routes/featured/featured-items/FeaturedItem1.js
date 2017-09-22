import React, { Component } from 'react';

import config from 'utils/config';

// Imgs for first Set items
// Chairs
import Chair1 from 'assets/images/Chairs/sg_chair_1.JPG';
import Chair2 from 'assets/images/Chairs/sg_chair_2.JPG';
// Desks
import Desk1 from 'assets/images/Desks/sg_desk_1.JPG';


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
                  <img src={Chair1} className={s.fItem__contentImg} />
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
                  <img src={Chair2} className={s.fItem__contentImg} />
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
                  <img src={Desk1} className={s.fItem__contentImg} />
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
