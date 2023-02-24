import React from 'react';
import PurchaseList from '../../components/user/PurchaseList';
import UserProfile from '../../components/user/UserProfile';
import Setting from '../../components/user/Setting';
import styled from 'styled-components';
import { getCookie } from '../../utils/cookie';
import AlertLoginState from '../../components/common/AlertLoginState';

const MyPage = () => {
  return (
    <PageWrap>
      {getCookie('accessToken') ? (
        <>
          <UserProfile />
          <Setting />
          <PurchaseList />
        </>
      ) : (
        <AlertLoginState text={'로그인 후 이용 가능합니다.'} />
      )}
    </PageWrap>
  );
};
const PageWrap = styled.div`
  padding: 35px;
`;

export default MyPage;
