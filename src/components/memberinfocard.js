import React from 'react';
import Moment from 'react-moment';
import '../css/pages/home.css';
import '../css/components/userpicture.css';
import '../css/components/memberinfocard.css';
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
export default function MemberInfoCard(props) {
    return (React.createElement("div", { className: "member-card frosted-container reveal" },
        React.createElement("div", { className: "flex-container" },
            React.createElement("div", { className: "date" },
                React.createElement(Moment, { calendar: true }, props.date)),
            React.createElement("div", { className: "avatar" },
                React.createElement("div", { className: "frame" },
                    React.createElement("img", { src: props.avatar }))),
            React.createElement("div", { className: "message" },
                React.createElement("p", null,
                    "Welcome,\u00A0",
                    React.createElement("b", null, props.nickname),
                    "\u00A0to the UAlbany IEEE server!")))));
}
