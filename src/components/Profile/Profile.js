import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  data: {
    name,
    tag,
    location = 'N/A',
    avatar = 'https://theatreonpodol.com/wp-content/themes/main/img/noimage.jpg',
    stats: { followers = 0, views = 0, likes = 0 },
  },
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

Profile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
      views: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
