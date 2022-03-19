import React from 'react';
import '../css/pages/home.css';
import '../css/components/userpicture.css';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/design_0.png';
export default function UserPicture() {
    var _a = useAuth0(), user = _a.user, isAuthenticated = _a.isAuthenticated, isLoading = _a.isLoading, loginWithRedirect = _a.loginWithRedirect;
    if (isLoading) {
        return React.createElement("div", { className: "frame" },
            React.createElement("img", { className: "fadeio", src: logo, alt: "User" }));
    }
    return (React.createElement(React.Fragment, null,
        isAuthenticated &&
            React.createElement("div", { className: "frame" },
                React.createElement("img", { src: user.picture, alt: user.name })),
        !isAuthenticated &&
            React.createElement("div", null,
                React.createElement("button", { className: "btn btn-outline-light rounded-pill", type: "submit", onClick: function () { return loginWithRedirect(); } }, "Sign in/Up"))));
}
