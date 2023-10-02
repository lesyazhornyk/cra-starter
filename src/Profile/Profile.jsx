import { Description, Avatar, Item, Stats, ProfileSection } from "./Profile.styled";

const Profile = ({username, tag, location,  avatar, stats}) => {
  return (
    <ProfileSection>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileSection>
  );
};

export default Profile;
