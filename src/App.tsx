import React from 'react';
import Dasboard from './components/dashboard/index';
import { GlobalStyle } from './indexStyle';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Dasboard />
        </div>
    );
}

export default App;
