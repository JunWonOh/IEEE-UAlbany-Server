import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../css/components/sidebar.css'
import UserInfo from './userinfo';


export default function SideBarNavigation(props) {
    const { logout } = useAuth0();

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

    function getName() {
        if (props.name.length > 20) {
            return (
                <div>Hi {props.name.substring(0, 20) + '...'}</div>
            )
        } else {
            return (
                <div>Hi {props.name}</div>
            )
        }
    }
    return (
        <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={()=>closeNav()}>&times;</a>
            <div className="account-info">
                <div className="frame-large">
                    <img src={props.picture} alt="avatar"></img>
                </div>
                <div>
                    {getName()}
                    <div className="id-number">{props.id}</div>
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