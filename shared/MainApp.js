import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import config from 'utils/config';

// Layout
import AppLayout, { Content } from 'components/app-layout';
import Header from 'components/header';
import Navigation from 'components/navigation';
import DevTools from 'components/devtools';
import Analytics from 'components/analytics';
import Footer from 'components/footer';

// Routes
import Home from './routes/home';
import Grid from './routes/grid';
import About from './routes/about';
import Featured from './routes/featured';
import Chairs from './routes/chairs';
import NotFound from './routes/not-found';

export default function App() {
  return (
    <AppLayout>
      <Helmet {...config('helmet')} />
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/chairs">Chairs</Link>
          <Link to="/about">About</Link>
        </Navigation>
      </Header>
      <Content>
        <Route component={Analytics} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/about" component={About} />
          <Route path="/chairs" component={Chairs} />
          <Route component={NotFound} />
        </Switch>
        <DevTools />
      </Content>
      <Footer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/planets">Sold</Link>
        </Navigation>
      </Footer>
    </AppLayout>
  );
}
