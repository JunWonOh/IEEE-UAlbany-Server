"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import '../App.css';
const navigation_1 = __importDefault(require("../components/navigation"));
function Home() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement(navigation_1.default, null),
            react_1.default.createElement("div", { className: "home-div flex-container" },
                react_1.default.createElement("div", { className: "home-description-div frosted-container container" },
                    react_1.default.createElement("div", { className: "center" },
                        react_1.default.createElement("p", { className: "home-description-title" },
                            react_1.default.createElement("b", null, "UAlbany IEEE Server")),
                        react_1.default.createElement("p", { className: "home-description" }, "Free cloud hosting service for UAlbany IEEE Club Members."),
                        react_1.default.createElement("div", { className: "home-buttons" },
                            react_1.default.createElement("button", { className: "btn btn-outline-light btn-parent-site", type: "submit", onClick: (e) => { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Parent Site"),
                            react_1.default.createElement("button", { className: "btn btn-primary btn-get-started", type: "submit", onClick: (e) => { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Get Started")))),
                react_1.default.createElement("div", { className: "home-image-div container" },
                    react_1.default.createElement("div", { className: "center" },
                        react_1.default.createElement("img", { className: "logo-svg", src: "/images/ieeeualbany.svg", alt: "server-header-img" })))))));
}
exports.default = Home;
