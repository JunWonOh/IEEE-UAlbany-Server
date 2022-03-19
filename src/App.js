import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/dashboard';
function App() {
    return (React.createElement("div", null,
        React.createElement(Router, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/dashboard", element: React.createElement(Dashboard, null) })))));
}
export default App;
