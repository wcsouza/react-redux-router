import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from './components/header';
import teste from './components/teste';
import teste2 from './components/teste2';

export default props => (
    <Router>
        <div>
            <Header />
            <Route path='/' exact component={teste} />
            <Route path='/teste2' component={teste2} />
            <Redirect from='*' to='/' />
        </div>
    </Router>
)