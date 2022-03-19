import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/components/sidebar.css';
export default function SideBarNavigation() {
    var logout = useAuth0().logout;
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    return (React.createElement("div", { id: "mySidebar", className: "sidebar" },
        React.createElement("a", { href: "javascript:void(0)", className: "closebtn", onClick: function () { return closeNav(); } }, "\u00D7"),
        React.createElement("a", { href: "/dashboard" }, "My Dashboard"),
        React.createElement("a", { href: "javascript:void(0)" }, "Search"),
        React.createElement("a", { href: "/members" }, "Members"),
        React.createElement("a", { href: "javascript:void(0)", onClick: function () { return logout(); } }, "Log Out")));
}
