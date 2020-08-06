import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from '../pages/inicio/index';
import Exame from '../pages/exame/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/exame" component={Exame} />
    </Switch>
  </BrowserRouter>
);

export default Routes;