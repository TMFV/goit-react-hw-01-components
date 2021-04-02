import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function friendOnline(status) {
    if (status) {
        return "#2ECC71"
    } else {return "#E74C3C" }
}

const FriendList = ({ friends })=> {
    return<div class={styles.friends}>
        <ul class={styles.friendlist}>
            {friends.map((friend) => (<li class={styles.item} key={friend.id}>
                <span class={styles.status} style={{ color: friendOnline(friend.isOnline) }}> ●
                </span>
                <img class={styles.avatar} src={friend.avatar} alt=     {friend.name} width="48" />
                <p class={styles.name}>{friend.name}</p>
            </li>
            ))}
        
        </ul>
    </div>
}
FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string.isRequired,
}
FriendList.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg",
    name: "User name",
    isOnline: false,
}

export default FriendList;