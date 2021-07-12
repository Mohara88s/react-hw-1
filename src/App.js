import React from 'react';
import Profile from './conponents/Profile/Profile'
import user from './conponents/Profile/user.json'
const App = () => {
    return (
        <div>
        <h1>React Homework 1</h1>
        <h2>Profile user card in social network</h2>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    </div>)
}

export default App;