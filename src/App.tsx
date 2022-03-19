import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/dashboard'; 
import SideBarNavigation from './components/sidebar';
import PageNotFound from './pages/pagenotfound';

function App() {
  return (
    <div>
      <SideBarNavigation></SideBarNavigation>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
