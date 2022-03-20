import React, { useEffect } from 'react';
import '../css/pages/home.css';
import '../css/pages/dashboard.css';
import Navigation from '../components/navigation';
import pnf from '../images/404.gif';
export default function PageNotFound() {
    useEffect(function () {
        document.title = "Error 404 | UAlbany IEEE Server";
    });
    var reveal = function () {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
            else {
                reveals[i].classList.remove("active");
            }
        }
    };
    window.addEventListener("load", reveal);
    return (React.createElement("div", null,
        React.createElement(Navigation, null),
        React.createElement("div", { className: "offset" },
            React.createElement("section", { id: "instructions" },
                React.createElement("div", { className: "success flex-container" },
                    React.createElement("div", { className: "container text reveal" },
                        React.createElement("div", { className: "center" },
                            React.createElement("h1", { className: "pnf" }, "404"),
                            React.createElement("p", null, "The page you are looking for doesn't exist or it could be under development."))),
                    React.createElement("div", { className: "container image" },
                        React.createElement("div", { className: "center" },
                            React.createElement("div", { className: "frame-celeb" },
                                React.createElement("img", { src: pnf, alt: "404.gif" })))))))));
}
