import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.image} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProp = {
  avatar: 'https://theatreonpodol.com/wp-content/themes/main/img/noimage.jpg',
  location: 'N/A',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
