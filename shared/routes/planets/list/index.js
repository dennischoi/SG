import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./FeaturedList'),
  ssrMode: 'boundary',
  name: 'FeaturedList',
});
