import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/navigation';
import '../css/pages/home.css';
import logo_svg from '../images/ieeeualbany.svg';
export default function Home() {
    var _a = useState("animation-on"), animation = _a[0], setAnimation = _a[1];
    var toggleAnimation = function () {
        if (animation === "animation-on")
            setAnimation("animation-off");
        else
            setAnimation("animation-on");
    };
    useEffect(function () {
        axios.get("https://ieeeualbany-be.herokuapp.com/").then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
            console.log('error!');
            console.log(error);
        });
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
    window.addEventListener("scroll", reveal);
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Navigation, null),
            React.createElement("div", { className: "offset" },
                React.createElement("section", { id: "home" },
                    React.createElement("div", { className: animation },
                        React.createElement("div", { className: "home-div flex-container" },
                            React.createElement("div", { className: "home-description-div frosted-container container" },
                                React.createElement("div", { className: "center" },
                                    React.createElement("p", { className: "title" }, "UAlbany IEEE Server"),
                                    React.createElement("p", { className: "description" }, "A free cloud hosting service for UAlbany IEEE club members."),
                                    React.createElement("div", { className: "home-buttons" },
                                        React.createElement("button", { className: "btn btn-outline-light btn-parent-site", type: "submit", onClick: function (e) { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Parent Site"),
                                        React.createElement("button", { className: "btn btn-primary btn-get-started", type: "submit", onClick: function (e) { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Get Started"),
                                        React.createElement("div", { className: "form-check form-switch" },
                                            React.createElement("input", { className: "form-check-input", type: "checkbox", id: "flexSwitchCheckDefault", onChange: toggleAnimation }),
                                            React.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckDefault" }, "Disable animation"))))),
                            React.createElement("div", { className: "home-image-div container" },
                                React.createElement("div", { className: "center" },
                                    React.createElement("img", { className: "logo-svg", src: logo_svg, alt: "server-header-img" })))))),
                React.createElement("section", { id: "about" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("div", { className: "container-anim reveal" },
                            React.createElement("div", { className: "text-container" },
                                React.createElement("div", { className: "text-box" },
                                    React.createElement("p", { className: "title" }, "All your side projects, in one convenient location"),
                                    React.createElement("p", { className: "description" }, "Host or upload your websites, discord bots, apps and more without being limited to a single linux container.")))),
                        React.createElement("div", { className: "small-icons" },
                            React.createElement("i", { className: "font-awesome fas fa-mobile-alt" }),
                            React.createElement("i", { className: "font-awesome fas fa-server" }),
                            React.createElement("i", { className: "font-awesome fas fa-desktop" })))),
                React.createElement("section", { id: "discord-integration" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("div", { className: "container-anim reveal" },
                                React.createElement("div", { className: "text-container" },
                                    React.createElement("div", { className: "text-box" },
                                        React.createElement("p", { className: "title" }, "Side-by-side Discord integration"),
                                        React.createElement("p", { className: "description" }, "Being a Discord-oriented organization, users must interface with the IEEE Server Discord bot to communicate with the server."),
                                        React.createElement("p", { className: "disclaimer" }, "(Disclaimer: By tying your Discord account to the server, only your Discord profile name, avatar, ID, and email will be logged, which most Discord bots have access to already. You can remove this information any time by contacting the server administrator.)"))))),
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("i", { className: "large-icon font-awesome fab fa-discord" })))),
                React.createElement("section", { id: "portfolio" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("i", { className: "large-icon fas fa-folder-open" })),
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("div", { className: "container-anim reveal" },
                                React.createElement("div", { className: "text-container" },
                                    React.createElement("div", { className: "text-box" },
                                        React.createElement("p", { className: "title" }, "Build and compare your portfolio"),
                                        React.createElement("ul", null,
                                            React.createElement("li", null, "Have your projects easily accessible to show off"),
                                            React.createElement("li", null, "See what projects your peers are working on by searching their Discord name"),
                                            React.createElement("li", null, "Members who upload a project to the server get the \"Server Contributor\" role to distinguish themself")))))))),
                React.createElement("section", { id: "support" },
                    React.createElement("div", { className: "faq" },
                        React.createElement("p", { className: "title" }, "Q and A"),
                        React.createElement("p", null,
                            React.createElement("b", null, "I created an account over a week ago, and I still don't have access. How come?")),
                        React.createElement("p", null,
                            React.createElement("em", null, "Only members in the IEEE Discord server with the \"Club Member\" role are allowed access to SSH into the server. If you are a club member, please reach out!")),
                        React.createElement("p", null,
                            React.createElement("b", null, "How is this service different from Github?")),
                        React.createElement("p", null,
                            React.createElement("em", null, "Aside from hosting, it makes it easier to see what everyone in the club is working on.")),
                        React.createElement("p", null,
                            React.createElement("b", null, "I found a bug, flaw, or I have a suggestion")),
                        React.createElement("p", null,
                            React.createElement("em", null, "Please reach out via the socials below!"))),
                    React.createElement("div", { className: "questions text-center" },
                        React.createElement("p", { className: "title" }, "Questions?"),
                        React.createElement("p", { className: "description" }, "Feel free to reach out via any of these socials for any questions you might have."),
                        React.createElement("div", { className: "small-icons" },
                            React.createElement("a", { href: "https://discord.gg/ieee" },
                                React.createElement("i", { className: "fab fa-discord" })),
                            React.createElement("a", { href: "https://www.instagram.com/ieee.ualbany/?hl=en" },
                                React.createElement("i", { className: "fab fa-instagram" })),
                            React.createElement("a", { href: "https://www.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA" },
                                React.createElement("i", { className: "fab fa-youtube" })),
                            React.createElement("a", { href: "https://twitter.com/IeeeUalbany" },
                                React.createElement("i", { className: "fab fa-twitter" })),
                            React.createElement("a", { href: "https://www.linkedin.com/company/ieeeualbany" },
                                React.createElement("i", { className: "fab fa-linkedin" })))))))));
}
