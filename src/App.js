import React from "react";

import Profile from "./conponents/Profile/Profile";
import user from "./conponents/Profile/user.json";

import Statistics from "./conponents/Statistics/Statistics";
import statisticalData from "./conponents/Statistics/statistical-data.json";

import FriendList from "./conponents/FriendList/FriendList";
import friends from "./conponents/FriendList/friends.json";

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
      <h2>Statistics section</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Friend list</h2>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
