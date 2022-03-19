import React from 'react';
import '../css/pages/home.css';
import '../css/pages/dashboard.css';
import Navigation from '../components/navigation';
import celebration from '../images/celebration.gif';
export default function Dashboard() {
    return (React.createElement("div", null,
        React.createElement(Navigation, null),
        React.createElement("div", { className: "offset" },
            React.createElement("section", { id: "instructions" },
                React.createElement("div", { className: "success flex-container" },
                    React.createElement("div", { className: "container text" },
                        React.createElement("div", { className: "center" },
                            React.createElement("h1", null, "Almost there!"),
                            React.createElement("p", null,
                                "Visit ",
                                React.createElement("b", null, "#bot-commands"),
                                " in the UAlbany IEEE Discord server and type ",
                                React.createElement("b", null, "!verify."),
                                "The \"IEEE Server\" bot will message you with further instructions to SSH into the server. After that, you can refresh this page to access your dashboard."))),
                    React.createElement("div", { className: "container image" },
                        React.createElement("div", { className: "center" },
                            React.createElement("div", { className: "frame-celeb" },
                                React.createElement("img", { src: celebration, alt: "celebration.gif" })))))))));
}
