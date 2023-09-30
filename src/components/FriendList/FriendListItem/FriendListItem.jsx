import { FriendList, Avatar, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendList>
      <Status
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      />
      <Avatar src={avatar} alt="User avatar" width="50" />
      <Name>{name}</Name>
    </FriendList>
  );
};

export default FriendListItem;
