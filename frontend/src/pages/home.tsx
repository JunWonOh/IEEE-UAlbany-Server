import React, { useState } from 'react'
import axios from 'axios';
// import '../App.css';
import Navigation from '../components/navigation';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation></Navigation>
                <div className="home-div flex-container">
                    <div className="home-description-div frosted-container container">
                        <div className="center">
                            <p className="home-description-title"><b>UAlbany IEEE Server</b></p>
                            <p className="home-description">Free cloud hosting service for UAlbany IEEE Club Members.</p>
                            <div className="home-buttons">
                                <button className="btn btn-outline-light btn-parent-site" type="submit" onClick={(e) => {e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'}}>Parent Site</button>
                                <button className="btn btn-primary btn-get-started" type="submit" onClick={(e) => {e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'}}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="home-image-div container">
                        <div className="center">
                            <img className="logo-svg" src="/images/ieeeualbany.svg" alt="server-header-img" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}