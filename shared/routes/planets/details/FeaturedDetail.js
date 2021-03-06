import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { withJob } from 'react-jobs';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Segment from 'components/segment';

import RelatedFeatured from './components/related-featured/RelatedFeatured';

@inject(['planets'])
@withJob({
  work: ({ match, planets }) => planets.fetchById(match.params.id),
  shouldWorkAgain: (prev, next) => prev.match.params.id !== next.match.params.id,
})
export default class FeaturedDetail extends Component {

  static propTypes = {
    jobResult: PropTypes.shape({
      results: PropTypes.array,
      count: PropTypes.number,
      previous: PropTypes.string,
      next: PropTypes.string,
    }),
  };

  /**
   * Render method
   * @return {Component}
   */
  render() {
    const { jobResult: planet } = this.props;
    const { name, gravity, terrain, climate, population, diameter } = planet;
    return (
      <div>
        <Helmet title="Planet loading..." />
        <Segment>
          <div>
            <Helmet title={`Planet ${name}`} />
            <h1>{name}</h1>
            <ul>
              <li><strong>Gravity:</strong> {gravity}</li>
              <li><strong>Terrain:</strong> {terrain}</li>
              <li><strong>Climate:</strong> {climate}</li>
              <li><strong>Population:</strong> {population}</li>
              <li><strong>Diameter:</strong> {diameter}</li>
            </ul>
            <Link to="/planets">Go back</Link>
            <hr />
            <RelatedFeatured planet={planet} />
          </div>
        </Segment>
      </div>
    );
  }
}
