import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import Navigation from '../components/navigation';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation></Navigation>
                
            </header>
        </div>
    )
}