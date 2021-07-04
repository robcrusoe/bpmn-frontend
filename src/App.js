import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Shared/Header';
import PageNotFound from './components/Shared/PageNotFound';
import FrontendAbout from './components/About/FrontendAbout/FrontendAbout';
import ServerAbout from './components/About/ServerAbout/ServerAbout';
import Diagram from './components/Diagram/Diagram';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={FrontendAbout} />
        <Route path="/server" component={ServerAbout} />
        <Route path="/diagram" component={Diagram} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
