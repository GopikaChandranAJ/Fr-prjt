import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Encrypt />} />
                <Route path="/decrypt" element={<Decrypt />} />
            </Routes>
        </Router>
    );
};

export default App;
