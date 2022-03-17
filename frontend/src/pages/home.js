"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// import '../App.css';
const navigation_1 = __importDefault(require("../components/navigation"));
function Home() {
    const [animation, setAnimation] = (0, react_1.useState)("animation-on");
    const toggleAnimation = () => {
        if (animation === "animation-on")
            setAnimation("animation-off");
        else
            setAnimation("animation-on");
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement(navigation_1.default, null),
            react_1.default.createElement("div", { className: "offset" },
                react_1.default.createElement("section", { id: "home" },
                    react_1.default.createElement("div", { className: animation },
                        react_1.default.createElement("div", { className: "home-div flex-container" },
                            react_1.default.createElement("div", { className: "home-description-div frosted-container container" },
                                react_1.default.createElement("div", { className: "center" },
                                    react_1.default.createElement("p", { className: "title" }, "UAlbany IEEE Server"),
                                    react_1.default.createElement("p", { className: "description" }, "A free cloud hosting service for UAlbany IEEE club members."),
                                    react_1.default.createElement("div", { className: "home-buttons" },
                                        react_1.default.createElement("button", { className: "btn btn-outline-light btn-parent-site", type: "submit", onClick: (e) => { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Parent Site"),
                                        react_1.default.createElement("button", { className: "btn btn-primary btn-get-started", type: "submit", onClick: (e) => { e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'; } }, "Get Started"),
                                        react_1.default.createElement("div", { className: "form-check form-switch" },
                                            react_1.default.createElement("input", { className: "form-check-input", type: "checkbox", id: "flexSwitchCheckDefault", onChange: () => toggleAnimation() }),
                                            react_1.default.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckDefault" }, "Disable animations"))))),
                            react_1.default.createElement("div", { className: "home-image-div container" },
                                react_1.default.createElement("div", { className: "center" },
                                    react_1.default.createElement("img", { className: "logo-svg", src: "/images/ieeeualbany.svg", alt: "server-header-img" })))))),
                react_1.default.createElement("section", { id: "about" },
                    react_1.default.createElement("div", { className: "text-center" },
                        react_1.default.createElement("p", { className: "title" }, "All your side projects, in one convenient location"),
                        react_1.default.createElement("p", { className: "description" }, "Host or upload your websites, discord bots, apps and more without being limited to a single linux container."),
                        react_1.default.createElement("div", { className: "small-icons" },
                            react_1.default.createElement("i", { className: "font-awesome fas fa-mobile-alt" }),
                            react_1.default.createElement("i", { className: "font-awesome fas fa-server" }),
                            react_1.default.createElement("i", { className: "font-awesome fas fa-desktop" })))),
                react_1.default.createElement("section", { id: "discord-integration" },
                    react_1.default.createElement("div", { className: "row" },
                        react_1.default.createElement("div", { className: "col-md-6" },
                            react_1.default.createElement("p", { className: "title" }, "Side-by-side Discord integration"),
                            react_1.default.createElement("p", { className: "description" }, "Being a Discord-oriented organization, users must interface with the IEEE Server Discord bot to communicate with the server."),
                            react_1.default.createElement("p", { className: "disclaimer" }, "(Disclaimer: By tying your Discord account to the server, only your Discord profile name, avatar, ID, and email will be logged, which most Discord bots have access to already. You can remove this information any time by contacting the server administrator.)")),
                        react_1.default.createElement("div", { className: "col-md-6" },
                            react_1.default.createElement("i", { className: "large-icon font-awesome fab fa-discord" })))),
                react_1.default.createElement("section", { id: "portfolio" },
                    react_1.default.createElement("div", { className: "row" },
                        react_1.default.createElement("div", { className: "col-md-6" },
                            react_1.default.createElement("i", { className: "large-icon fas fa-folder-open" })),
                        react_1.default.createElement("div", { className: "col-md-6" },
                            react_1.default.createElement("p", { className: "title" }, "Build and compare your portfolio"),
                            react_1.default.createElement("ul", null,
                                react_1.default.createElement("li", null, "Have your projects easily accessible to show off"),
                                react_1.default.createElement("li", null, "See what projects your peers are working on by searching their Discord name"),
                                react_1.default.createElement("li", null, "Members who upload a project to the server get the \"Server Contributor\" role to distinguish themself"))))),
                react_1.default.createElement("section", { id: "support" },
                    react_1.default.createElement("div", { className: "faq" },
                        react_1.default.createElement("p", { className: "title" }, "Q and A"),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("b", null, "I created an account over a week ago, and I still don't have access. How come?")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("em", null, "Only members in the IEEE Discord server with the \"Club Member\" role are allowed access to SSH into the server. If you are a club member, please reach out!")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("b", null, "How is this service different from Github?")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("em", null, "Aside from hosting, it makes it easier to see what everyone in the club is working on.")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("b", null, "I found a bug, flaw, or I have a suggestion")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("em", null, "Please reach out via the socials below!"))),
                    react_1.default.createElement("div", { className: "questions text-center" },
                        react_1.default.createElement("p", { className: "title" }, "Questions?"),
                        react_1.default.createElement("p", { className: "description" }, "Feel free to reach out via any of these socials for any questions you might have."),
                        react_1.default.createElement("div", { className: "small-icons" },
                            react_1.default.createElement("a", { href: "https://discord.gg/ieee" },
                                react_1.default.createElement("i", { className: "fab fa-discord" })),
                            react_1.default.createElement("a", { href: "https://www.instagram.com/ieee.ualbany/?hl=en" },
                                react_1.default.createElement("i", { className: "fab fa-instagram" })),
                            react_1.default.createElement("a", { href: "https://www.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA" },
                                react_1.default.createElement("i", { className: "fab fa-youtube" })),
                            react_1.default.createElement("a", { href: "https://twitter.com/IeeeUalbany" },
                                react_1.default.createElement("i", { className: "fab fa-twitter" })),
                            react_1.default.createElement("a", { href: "https://www.linkedin.com/company/ieeeualbany" },
                                react_1.default.createElement("i", { className: "fab fa-linkedin" })))))))));
}
exports.default = Home;
