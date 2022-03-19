import React, { useState, useEffect } from 'react'
import '../css/pages/home.css'
import '../css/components/userpicture.css'
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/design_0.png';

export default function UserPicture() {
    const {user, isAuthenticated, isLoading, loginWithRedirect} = useAuth0();
    
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    if (isLoading) {
        return <div className="frame">
            <img className="fadeio" src={logo} alt="User"/>
        </div>;
    }

    return (
        <>
            {isAuthenticated && 
            <div onClick={()=>openNav()}>
                <div className="frame">
                    <img src={user.picture} alt={user.name} />
                </div>
                <i className="fas fa-caret-down"></i>
            </div>}
            {!isAuthenticated && 
            <div>
                <button className="btn btn-outline-light rounded-pill" type="submit" onClick={()=> loginWithRedirect()}>Sign in/Up</button>
            </div>}
        </>
    );
}