"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../App.css");
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
function Navigation() {
    return (react_1.default.createElement("div", { id: "App-navigation" },
        react_1.default.createElement("nav", { className: "navbar navbar-expand-lg" },
            react_1.default.createElement("div", { className: "container-fluid" },
                react_1.default.createElement("a", { className: "nav-link navbar-brand", href: "#" },
                    react_1.default.createElement("img", { src: "/images/transparent logo.png", className: "App-logo", alt: "logo" })),
                react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    react_1.default.createElement("i", { className: "fas fa-bars" })),
                react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    react_1.default.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" },
                        react_1.default.createElement("li", { className: "nav-item" },
                            react_1.default.createElement("a", { className: "nav-link", "aria-current": "page", href: "#" }, "Documentation_")),
                        react_1.default.createElement("li", { className: "nav-item" },
                            react_1.default.createElement("a", { className: "nav-link", href: "#support" }, "Support_")),
                        react_1.default.createElement("li", { className: "nav-item" },
                            react_1.default.createElement("a", { className: "nav-link", href: "#about" }, "About_"))),
                    react_1.default.createElement("form", { className: "d-flex" },
                        react_1.default.createElement("button", { className: "btn btn-outline-light rounded-pill", type: "submit", onClick: (e) => { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Sign in/Up")))))));
}
exports.default = Navigation;
