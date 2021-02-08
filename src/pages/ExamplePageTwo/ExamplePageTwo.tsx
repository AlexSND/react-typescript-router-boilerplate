import React from 'react';
import { Helmet } from 'react-helmet';

const ExamplePageTwo: React.FC = () => (
  <>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Page description" />
      <title>Page two</title>
    </Helmet>
    <h1>Page Two</h1>
  </>
);

export default ExamplePageTwo;
