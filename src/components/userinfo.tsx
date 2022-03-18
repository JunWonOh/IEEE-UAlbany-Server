import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navigation from '../components/navigation';
import '../css/pages/home.css'
import logo_svg from '../images/ieeeualbany.svg'
import { useAuth0 } from '@auth0/auth0-react';

export default function UserInfo() {
    const {user, isAuthenticated, isLoading} = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      );
}