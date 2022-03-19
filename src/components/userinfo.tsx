import React, { useState, useEffect } from 'react'
import '../css/pages/home.css'
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
            <p>{user.nickname}</p>
            <p>{user.address}</p>
            <p>{user.sub.split("|")[2]}</p>
          </div>
        )
      );
}