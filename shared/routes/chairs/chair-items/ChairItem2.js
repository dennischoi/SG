import React, { Component } from 'react';

import config from 'utils/config';

// Imgs for first Set items
// Chairs
import Chair1 from 'assets/images/Chairs/sg_chair_7.JPG';
import Chair2 from 'assets/images/Chairs/sg_chair_8.JPG';
import Chair3 from 'assets/images/Chairs/sg_chair_9.JPG';


import s from './ChairItem.scss';
import g from '../../grid/components/grid/Grid.scss'

export default class ChairItem2 extends Component {
  render() {
    return (
      <section className={ s.cItem__section }> 
        
          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <a>
              <div className={s.cItem__case}>
                <div className={s.cItem__content}>
                  <img src={Chair1} className={s.cItem__contentImg} />
                  <div className={s.cItem__overlay}>
                    <div className={s.cItem__title}>
                      <span className={s.cItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.cItem__titleBuy }>
                        <div className={ s.cItem__buyBtn }>
                          Buy Now
                        </div>
                      </div>
                      <div className={ s.cItem__titleExtra }>
                        <div className={ s.cItem__Fav }></div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <a>
              <div className={s.cItem__case}>
                <div className={s.cItem__content}>
                  <img src={Chair2} className={s.cItem__contentImg} />
                  <div className={s.cItem__overlay}>
                    <div className={s.cItem__title}>
                      <span className={s.cItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.cItem__titleBuy }>
                        <div className={ s.cItem__buyBtn }>
                          Buy Now
                        </div>
                      </div>
                      <div className={ s.cItem__titleExtra }>
                        <div className={ s.cItem__Fav }></div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className={s(s.cItem__gridCol, s.cItem__each)}>
            <a>
              <div className={s.cItem__case}>
                <div className={s.cItem__content}>
                  <img src={Chair3} className={s.cItem__contentImg} />
                  <div className={s.cItem__overlay}>
                    <div className={s.cItem__title}>
                      <span className={s.cItem__titleText}>Lorem Ipsum</span>
                      <div className={ s.cItem__titleBuy }>
                        <div className={ s.cItem__buyBtn }>
                          Buy Now
                        </div>
                      </div>
                      <div className={ s.cItem__titleExtra }>
                        <div className={ s.cItem__Fav }></div>
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
