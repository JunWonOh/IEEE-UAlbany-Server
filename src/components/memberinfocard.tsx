import React from 'react';
import Moment from 'react-moment';
import '../css/pages/home.css';
import '../css/components/userpicture.css'
import '../css/components/memberinfocard.css'

const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
    }
    
export default function MemberInfoCard(props) {
    return(
        <div className="member-card frosted-container reveal">
            <div className="flex-container">
                <div className="date">
                    <Moment calendar>
                        {props.date}
                    </Moment>
                </div>
                <div className="avatar">
                    <div className="frame">
                        <img src={props.avatar}/>
                    </div>
                </div>
                <div className="message">
                    <p>Welcome,&nbsp;<b>{props.nickname}</b>&nbsp;to the UAlbany IEEE server!</p>
                </div>
            </div>
        </div>
    )

}