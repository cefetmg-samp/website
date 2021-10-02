import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from './pages/About'
import Repos from './pages/Repos'
import Members from './pages/Members'

const Routes = () => (
    <BrowserRouter>
        <Route path="/" exact component={About} />
        <Route path="/repos" exact component={Repos} />
        <Route path="/members" exact component={Members} />
    </BrowserRouter>
);

export default Routes;
