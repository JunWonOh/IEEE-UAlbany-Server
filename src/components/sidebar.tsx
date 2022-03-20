import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../css/components/sidebar.css'
import UserInfo from './userinfo';


export default function SideBarNavigation(props) {
    const { logout } = useAuth0();

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    return (
        <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={()=>closeNav()}>&times;</a>
            <div className="account-info">
                <div className="frame">
                    <img src={props.picture} alt="avatar"></img>
                </div>
                <div>
                    <div>Hello,</div>
                    <div><p>{props.name}</p></div>
                </div>
            </div>
            <hr/>
            <a href="/dashboard">My Dashboard</a>
            <a href="javascript:void(0)">Search</a>
            <a href="/members">Members</a>
            <a href="javascript:void(0)" onClick={ ()=>logout() }>Log Out</a>
        </div>
    );

}