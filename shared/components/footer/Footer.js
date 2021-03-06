import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import FacebookSvg from 'assets/images/Footer/facebook-logo-button.svg';
import InstagramSvg from 'assets/images/Footer/instagram-logo.svg';
// import TwitterSvg from 'assets/images/Footer/twitter-logo-button.svg';

import s from './Footer.scss';




export default class Footer extends Component {

  // Switch of add class JavaScript
  handleClick() {
    console.log('test');
    var element = document.getElementById('test');
    element.classList.toggle('testClass');
  }


  // Click check id
  idClick(e) {
    alert(e);

  }


  render() {


    return (
      <footer>
        <section className={ s.footer__section }>
          <div className={ s.footer__tables }>
            <h3>Media</h3>
            <div className={ s.footer__media__container }>
              <div className={ s.footer__media__item }>
                <a href="https://www.instagram.com/scout.gather/" className={ s.footer__media__anchor } rel="noopener" target="_blank">
                  <div className={ s.footer__mediaIcon }>
                    <FacebookSvg className={ s.footer__media__logoSvg } />
                  </div>
                </a>
              </div>


              <div className={ s.footer__media__item }>
                <a href="https://www.instagram.com/scout.gather/" className={ s.footer__media__anchor } rel="noopener" target="_blank">
                  <div className={ s.footer__mediaIcon }>
                    <InstagramSvg className={ s.footer__media__logoSvg } />
                  </div>
                </a>
              </div>

              <div className={ s.footer__media__item }>
                <a href="https://www.instagram.com/scout.gather/" className={ s.footer__media__anchor } rel="noopener" target="_blank">
                  <div className={ s.footer__mediaIcon }>
                    <InstagramSvg className={ s.footer__media__logoSvg } />
                  </div>
                </a>
              </div>

              <div className={ s.footer__media__item }>
                <a href="https://www.instagram.com/scout.gather/" className={ s.footer__media__anchor } rel="noopener" target="_blank">
                  <div className={ s.footer__mediaIcon }>
                    <InstagramSvg className={ s.footer__media__logoSvg } />
                  </div>
                </a>
              </div>
              
              
            </div>
            <div className={ s.footer__test }>
              <div id="test" onClick={(e) => this.handleClick(e)} className={ s.footer__test2 }>

              </div>
            </div>

            <div className={ s.footer__test }>
              <div id="test2" onClick={(e) => this.handleClick(e)} className={ s.footer__test2 }>

              </div>
            </div>

            <div className={ s.footer__test }>
              <div id="test3" onClick={(e) => this.idClick(this.id)} className={ s.footer__test2 }>

              </div>
            </div>

            <div className={ s.location }>
              <div className={ s.location__city }>
                <div className={ s.location__mapBox }>
                  <div className={ s.location__map }>
                  </div>
                </div>
                <div className={ s.location__cityName }>
                  <span>Bahama</span>
                </div>
                <div className={ s.location__cityDetails }>
                  <span>100 Beachy St, ON blah blah blah, Mexico</span>
                </div>
                <div className={ s.location__cityGoogle }>
                  <a>Google Maps of Location</a>
                </div>
              </div>

              <div className={ s.location__city }>
                <div className={ s.location__mapBox }>
                  <div className={ s.location__map }>
                  </div>
                </div>
                <div className={ s.location__cityName }>
                  <span>toronto</span>
                </div>
                <div className={ s.location__cityDetails }>
                  <span>199 Yonge St, ON blah blah blah, Toronto</span>
                </div>
                <div className={ s.location__cityGoogle }>
                  <a>Google Maps of Location</a>
                </div>
              </div>

              <div className={ s.location__city }>
                <div className={ s.location__mapBox }>
                  <div className={ s.location__map }>
                  </div>
                </div>
                <div className={ s.location__cityName }>
                  <span>Seoul</span>
                </div>
                <div className={ s.location__cityDetails }>
                  <span>222 Yonge St, ON blah blah blah, Korea</span>
                </div>
                <div className={ s.location__cityGoogle }>
                  <a>Google Maps of Location</a>
                </div>
              </div>
            </div>

          </div>

          {/*<div className={ s.footer__tables }>
            <h3>Test</h3>
            <div className={ s.footer__media__container }>
              <div className={ s.footer__media__item }>
                {this.props.children}
              </div>


              <div className={ s.footer__media__item }>
              </div>
            </div>
          </div>*/}
          
        </section>
      </footer>
    );
  }
}
