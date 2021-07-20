import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <>
      <span
        className={styles.status}
        data={friend.isOnline ? 'online' : 'offline'}
      >
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={'foto of' + friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </>
  );
};
FriendListItem.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
