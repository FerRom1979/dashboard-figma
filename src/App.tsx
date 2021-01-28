import React from 'react';
import Dashboard from './components/dashboard/index';
import { GlobalStyle } from './indexStyle';
import * as style from './indexStyle';
import Responsive from './components/responsive/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicTable from './components/table/basicTable';

function App() {
    const { DivResponsive, DivDashboard } = style;

    return (
        <div className="App">
            <Router>
                <GlobalStyle />
                <DivResponsive>
                    <Responsive />
                </DivResponsive>
                <DivDashboard>
                    <Dashboard />
                </DivDashboard>
                <Switch>
                    <Route exact path="/responsive" component={Responsive} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/basicTable" component={BasicTable} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
