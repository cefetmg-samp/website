import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from './pages/About'
import Publications from './pages/Publications'
import Repos from './pages/Repos'
import Members from './pages/Members'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={About} />
            <Route path="/website" exact component={About} />
            <Route path="/website/publications" component={Publications} />
            <Route path="/website/repos" component={Repos} />
            <Route path="/website/members" component={Members} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
