import React from 'react';

import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Heading from 'carbon-react/lib/components/heading';

import Experimental from './views/experimental';

class App extends React.Component {
  render() {
    return(
      <AppWrapper>
        <Heading title='Dev testing...' />
        <Experimental />
      </AppWrapper>
    );
  }
}

export default App
