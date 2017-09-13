import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import FeaturedList from './list';
import FeaturedDetail from './details';

const FeaturedRoutes = ({ match }) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}/detail/:id`} component={FeaturedDetail} />
      <Route exact path={`${match.url}/page/:page`} component={FeaturedList} />
      <Redirect to={`${match.url}/page/1`} />
    </Switch>
  </div>
);

FeaturedRoutes.propTypes = {
  match: PropTypes.object,
};

export default FeaturedRoutes;
