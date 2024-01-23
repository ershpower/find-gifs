import React from 'react';

import AppRouter from './AppRouter';
import { AnimatedBackground } from './components';

function App() {
    return (
        <div className="App">
            <AnimatedBackground />
            <div className="main-content">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
