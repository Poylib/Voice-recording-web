import { useState } from 'react';
import styled from 'styled-components';
import { getStorage, ref, listAll } from 'firebase/storage';
import { mainColor } from '../../Theme';

const SideBar = ({ openSide, audioList }) => {
  const [clickCheck, setClickCheck] = useState(false);
  const [clickNum, setClickNum] = useState('');
  const storage = getStorage();
  // console.log(storage);

  const clickList = e => {
    setClickNum(e.currentTarget.value);
    setClickCheck(!clickCheck);
  };
  return (
    <>
      {audioList && (
        <StyledSideBar openSide={openSide}>
          <div className='side-head'>녹음 리스트</div>
          <ul className='side-body'>
            {audioList.map((list, index) => {
              return (
                <li key={list.id} value={index} onClick={clickList}>
                  <div className='date-name'>
                    <span>{list.title.split('/')[0]}</span>
                    <span>{list.title.split('/')[1]}</span>
                  </div>
                  {clickNum === index && (
                    <div>
                      <span>버튼자리</span>
                      <span>버튼자리</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </StyledSideBar>
      )}
    </>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #f6f6f6;
  color: ${mainColor};
  transition: 0.3s;
  transform: translateX(${({ openSide }) => (openSide ? '-100%' : '0%')});
  z-index: 20;
  .side-head {
    width: 100%;
    height: 60px;
    background-color: ${mainColor};
    line-height: 60px;
    font-size: 160%;
    text-align: center;
    color: white;
  }
  ul {
    overflow-y: auto;
    li {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 10vh;
      padding: 0 10px;
      font-size: 130%;
      text-align: center;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
    }
  }
  .date-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      margin: 4px 0;
    }
  }
`;
