import React from 'react';
import '../css/components/navigation.css';
import logo from '../images/transparent logo.png';
import UserPicture from '../components/userpicture';
// {"nickname":"Jun Won","name":"Jun Won","picture":"https://cdn.discordapp.com/avatars/227577632265469952/88de9a39c6ce38a7d818c47df56fa817.png","updated_at":"2022-03-18T02:33:43.624Z","email":"junwon669@gmail.com","email_verified":true,"sub":"oauth2|discord|227577632265469952"}
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
                React.createElement("a", { className: "nav-link navbar-brand", href: "/" },
                    React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("i", { className: "fas fa-bars" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", "aria-current": "page", href: "/documentation" },
                                "Documentation",
                                React.createElement("span", { className: "blink" }, "_"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", href: "/#support" },
                                "Support",
                                React.createElement("span", { className: "blink" }, "_"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", href: "/#about" },
                                "About",
                                React.createElement("span", { className: "blink" }, "_")))),
                    React.createElement("form", { className: "d-flex" },
                        React.createElement(UserPicture, null)))))));
}
