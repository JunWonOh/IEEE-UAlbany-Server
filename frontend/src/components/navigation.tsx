import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';

// function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     // e.preventDefault();
//     // axios.get('/login')
//     //     .then(response => {
//     //         console.log(JSON.stringify(response));
//     //     })
//     //     .catch((error) => {
//     //         console.log(error);
//     //     })
//     window.location.href = '/login';
// }

export default function Navigation() {
    return (
            <div id="App-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="nav-link navbar-brand" href="#"><img src="/images/transparent logo.png" className="App-logo" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Documentation_</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#support">Support_</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About_</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-light rounded-pill" type="submit" onClick={(e) => {e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'}}>Sign in/Up</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}