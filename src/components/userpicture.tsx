import React, { useState, useEffect } from 'react'
import '../css/pages/home.css'
import { useAuth0 } from '@auth0/auth0-react';


export default function UserPicture() {
    const [image, setImage] = useState({});

    // useEffect(()=> {
    //     preloadImages();
    // })

    // const preloadImages = () => {
    //     var link = "";
    //     var img = new Image()
    //     img.onload = () => handleImageLoad();
    //     img.src = link;
    //     return {
    //         url: link,
    //         loaded: false
    //     }
    // }

    // const handleImageLoad = () => {
    //     image.loaded = true;
    //     setImage(image);
    // }

    return (
        <div>
            {image}
        </div>
    );
}