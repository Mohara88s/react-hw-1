import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  return (
    <li className="item">
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={"foto of" + friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};
FriendListItem.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
