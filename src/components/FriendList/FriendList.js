import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
