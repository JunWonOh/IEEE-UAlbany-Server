import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/components/sidebar.css';
import UserInfo from './userinfo';


export default function SideBarNavigation(props) {
    const { logout } = useAuth0();

    useEffect(() => {
        const userData = {
            id: props.id,
            avatar: props.picture,
            nickname: props.name,
            email: props.email
        }
        axios.post("https://ieeeualbany-be.herokuapp.com/users", userData).then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    })

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

    function getName() {
        if (props.name.length > 12) {
            return (
                <div>Hi {props.name.substring(0, 12) + '...'}</div>
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
            <a href="/dashboard" className="side-item">My Dashboard</a>
            <a href="javascript:void(0)" className="side-item">Search</a>
            <a href="/members" className="side-item">Members</a>
            <a href="javascript:void(0)" className="side-item" onClick={ ()=>logout() }>Log Out</a>
        </div>
    );

}