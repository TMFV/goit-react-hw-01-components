import styles from './FriendList.module.css';

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

export default FriendList;