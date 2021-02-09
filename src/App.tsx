import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import ExamplePageOne from './pages/ExamplePageOne';
import ExamplePageTwo from './pages/ExamplePageTwo';
import './styles/style.scss';

const App: React.FC = () => (
  <>
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <h1>
            Happy coding!
          </h1>
        </Route>
        <Route path="/page-one" component={ExamplePageOne} />
        <Route path="/page-two" component={ExamplePageTwo} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
