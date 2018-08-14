import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../app.routes';

const Layout = () => (
    <Router>
        <div>
            {routes.map(route => <Route key={route.path} {...route} />)}
        </div>
    </Router>
);

export default Layout;
