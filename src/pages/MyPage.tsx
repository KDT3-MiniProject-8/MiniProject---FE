import UserProfile from '../components/user/UserProfile';
import MyMenu from '../components/user/MyMenu';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <PageWrap>
      <UserProfile />
      <MyMenu />
    </PageWrap>
  );
};
const PageWrap = styled.div`
  padding: 35px;
`;

export default MyPage;
