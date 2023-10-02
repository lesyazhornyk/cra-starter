import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem key={item.id} name={item.name} avatar={item.avatar} isOnline={item.isOnline}/>
      ))}
    </ul>
  );
};

export default FriendList;