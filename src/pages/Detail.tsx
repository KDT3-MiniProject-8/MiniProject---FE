import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/**
 * "resultData": [
    {
        "itemId": 20,
        "category": "정기예금",
        "bank": "신한은행",
        "itemName": "신한 플러스 월복리 정기예금",
        "type": "복리",
        "join": "영업점,인터넷,스마트폰",
        "limit": null,
        "preference": null,
        "target": null,
        "dtype": "D",
        "rate": 3.26,
        "prefRate": 3.46,
        "mature": "-1개월 이하:(일반) 정기예금 기본금리 1/2  -1개월 초과~6개월 이하: (일반) 정기예금 기본금리의 1/4  -6개월 초과 0.2%"
    }
]
 * 
 */
const dummyData = {
  itemId: 20,
  category: '정기예금',
  bank: '신한은행',
  itemName: '신한 플러스 월복리 정기예금',
  type: '복리',
  join: '영업점,인터넷,스마트폰',
  limit: null,
  preference: null,
  target: null,
  dtype: 'D',
  rate: 3.26,
  prefRate: 3.46,
  mature:
    '-1개월 이하:(일반) 정기예금 기본금리 1/2  -1개월 초과~6개월 이하: (일반) 정기예금 기본금리의 1/4  -6개월 초과 0.2%',
};

const Detail = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
      <ThumbWrap>Detail</ThumbWrap>
      <DetailsWrap>
        <h1>상품 상세설명</h1>
        <li>{dummyData.category}</li>
      </DetailsWrap>
    </Wrap>
  );
};

const Wrap = styled.main``;
const ThumbWrap = styled.div``;
const DetailsWrap = styled.ul``;
export default Detail;
