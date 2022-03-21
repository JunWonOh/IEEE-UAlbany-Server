import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/components/sidebar.css';
export default function SideBarNavigation(props) {
    var logout = useAuth0().logout;
    useEffect(function () {
        var userData = {
            id: props.id,
            avatar: props.picture,
            nickname: props.name,
            email: props.email,
            accesskey: process.env.REACT_APP_ACCESS_KEY
        };
        axios.post("https://ieeeualbany-be.herokuapp.com/users", userData).then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    });
    function closeNav(e) {
        e.preventDefault();
        document.getElementById("mySidebar").style.width = "0";
    }
    function getName() {
        if (props.name.length > 12) {
            return (React.createElement("div", null,
                "Hi ",
                props.name.substring(0, 12) + '...'));
        }
        else {
            return (React.createElement("div", null,
                "Hi ",
                props.name));
        }
    }
    return (React.createElement("div", { id: "mySidebar", className: "sidebar" },
        React.createElement("a", { href: "#", className: "closebtn", onClick: function (e) { return closeNav(e); } }, "\u00D7"),
        React.createElement("div", { className: "account-info" },
            React.createElement("div", { className: "frame-large" },
                React.createElement("img", { src: props.picture, alt: "avatar" })),
            React.createElement("div", null,
                getName(),
                React.createElement("div", { className: "id-number" }, props.id))),
        React.createElement("hr", null),
        React.createElement("a", { href: "/dashboard", className: "side-item" }, "My Dashboard"),
        React.createElement("a", { href: "/search", className: "side-item" }, "Search"),
        React.createElement("a", { href: "/members", className: "side-item" }, "Members"),
        React.createElement("a", { href: "#", className: "side-item", onClick: function (e) { e.preventDefault(); logout(); } }, "Log Out")));
}
