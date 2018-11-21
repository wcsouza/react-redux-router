import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from './components/header';
import teste from './components/teste';
import teste2 from './components/teste2';
import teste3 from './components/teste3';
import teste4 from './components/teste4';

export default props => (
    <Router>
        <div>
            <Header />
            <Route path='/' exact component={teste} />
            <Route path='/teste2' component={teste2} />
            <Route path='/teste3' component={teste3} />
            <Route path='/teste4/:id' component={teste4} />
            <Redirect from='*' to='/' />
        </div>
    </Router>
)