import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
return <div className={styles.profile}>
  <div class={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      class={styles.avatar}
    />
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
      <span class={styles.quantity}>{stats.views}</span>
    </li>
  </ul>

</div>
};

export default Profile;