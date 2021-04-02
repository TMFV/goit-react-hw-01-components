import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div class={styles.profile}>
      <div class={styles.description}>
        <img src={avatar} alt="Аватар пользователя" class={styles.avatar} />
        <p class={styles.name}>{name}</p>
        <p class={styles.tag}>@{tag}</p>
        <p class={styles.location}>{location}</p>
      </div>
      <ul class={styles.stats}>
        <li>
          <span class={styles.label}>Followers</span>
          <span class={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span class={styles.label}>Views</span>
          <span class={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span class={styles.label}>Likes</span>
          <span class={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  name: 'User name',
  tag: '@User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '0',
    views: '0',
    likes: '0',
  },
};

export default Profile;
