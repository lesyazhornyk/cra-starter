import styled from '@emotion/styled';

export const FriendList = styled.li`
  border: 0.5px black solid;
  display: flex;
  justify-items: center;
  justify-content: left;
  width: 200px;
  background-color: white;
  margin-block: 7px;
`;

export const Avatar = styled.img`
  height: 55px;
  padding: 0.3em;
`;

export const Name = styled.p`
  margin-left: 10px;
`;

export const Status = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin: auto 10px;
`;
