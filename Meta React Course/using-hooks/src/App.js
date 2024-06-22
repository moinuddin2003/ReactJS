// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicUseStateApp from './BasicUseStateApp';
import IntermediateUseStateApp from './IntermediateUseStateApp';
function App () {
    return (
        <Router>
            <Routes>
                <Route exact path="/basic" element={<BasicUseStateApp />} />
                <Route path="/intermediate" element={<IntermediateUseStateApp />} />
            </Routes>
        </Router>
    );
};

export default App;
