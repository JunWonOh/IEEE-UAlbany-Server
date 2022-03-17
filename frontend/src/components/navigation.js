import React from 'react';
import '../css/components/navigation.css';
import logo from '../images/transparent logo.png';
// function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     // e.preventDefault();
//     // axios.get('/login')
//     //     .then(response => {
//     //         console.log(JSON.stringify(response));
//     //     })
//     //     .catch((error) => {
//     //         console.log(error);
//     //     })
//     window.location.href = '/login';
// }
export default function Navigation() {
    return (React.createElement("div", { id: "App-navigation" },
        React.createElement("nav", { className: "navbar navbar-expand-lg" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("a", { className: "nav-link navbar-brand", href: "#" },
                    React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("i", { className: "fas fa-bars" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", "aria-current": "page", href: "#" },
                                "Documentation",
                                React.createElement("span", { className: "blink" }, "_"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", href: "#support" },
                                "Support",
                                React.createElement("span", { className: "blink" }, "_"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", href: "#about" },
                                "About",
                                React.createElement("span", { className: "blink" }, "_")))),
                    React.createElement("form", { className: "d-flex" },
                        React.createElement("button", { className: "btn btn-outline-light rounded-pill", type: "submit", onClick: function (e) { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Sign in/Up")))))));
}
