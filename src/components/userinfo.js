import React from 'react';
import '../css/pages/home.css';
import { useAuth0 } from '@auth0/auth0-react';
export default function UserInfo() {
    var _a = useAuth0(), user = _a.user, isAuthenticated = _a.isAuthenticated, isLoading = _a.isLoading;
    if (isLoading) {
        return React.createElement("div", null, "Loading...");
    }
    return (isAuthenticated && (React.createElement("div", null,
        React.createElement("img", { src: user.picture, alt: user.name }),
        React.createElement("h2", null, user.name),
        React.createElement("p", null, user.email),
        React.createElement("p", null, user.nickname),
        React.createElement("p", null, user.address),
        React.createElement("p", null, user.sub.split("|")[2]))));
}
