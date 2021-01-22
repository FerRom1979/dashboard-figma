import React from 'react';
import Dasboard from './components/dashboard/index';
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
                    <Dasboard />
                </DivDashboard>
                <Switch>
                    <Route exact path="/dashboard" component={Dasboard} />
                    <Route exact path="/basicTable" component={BasicTable} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
