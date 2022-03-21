import React, { useEffect } from 'react';
import '../css/pages/home.css';
import '../css/pages/dashboard.css';
import Navigation from '../components/navigation';
import celebration from '../images/celebration.gif';
export default function Dashboard() {
    useEffect(function () {
        document.title = "My Dashboard | UAlbany IEEE Server";
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
                            React.createElement("h1", null, "Almost there!"),
                            React.createElement("p", null,
                                "Visit ",
                                React.createElement("b", null, "#bot-spam"),
                                " in the UAlbany IEEE Discord server and type ",
                                React.createElement("b", null, "!verify."),
                                "The \"IEEE Server\" bot will message you with further instructions to SSH into the server. After that, you can refresh this page to access your dashboard."))),
                    React.createElement("div", { className: "container image" },
                        React.createElement("div", { className: "center" },
                            React.createElement("div", { className: "frame-celeb" },
                                React.createElement("img", { src: celebration, alt: "celebration.gif" })))))))));
}
