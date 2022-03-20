import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/components/sidebar.css';
export default function SideBarNavigation(props) {
    var logout = useAuth0().logout;
    function closeNav() {
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
        React.createElement("a", { href: "javascript:void(0)", className: "closebtn", onClick: function () { return closeNav(); } }, "\u00D7"),
        React.createElement("div", { className: "account-info" },
            React.createElement("div", { className: "frame-large" },
                React.createElement("img", { src: props.picture, alt: "avatar" })),
            React.createElement("div", null,
                getName(),
                React.createElement("div", { className: "id-number" }, props.id))),
        React.createElement("hr", null),
        React.createElement("a", { href: "/dashboard" }, "My Dashboard"),
        React.createElement("a", { href: "javascript:void(0)" }, "Search"),
        React.createElement("a", { href: "/members" }, "Members"),
        React.createElement("a", { href: "javascript:void(0)", onClick: function () { return logout(); } }, "Log Out")));
}
