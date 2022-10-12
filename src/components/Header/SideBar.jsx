import styled from 'styled-components';
import { mainColor } from '../../Theme';

const SideBar = ({ openSide }) => {
  return (
    <SideBarBlock openSide={openSide}>
      <div className='side-head'>녹음 리스트</div>
      <ul className='side-body'>
        <li>녹음된 파일 11</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
        <li>녹음된 파일 1</li>
      </ul>
    </SideBarBlock>
  );
};

export default SideBar;

const SideBarBlock = styled.div`
  transform: translateX(${({ openSide }) => (openSide ? '-100%' : '0%')});
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 20;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  color: ${mainColor};
  background-color: #f6f6f6;
  .side-head {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 160%;
    background-color: ${mainColor};
    color: white;
    text-align: center;
  }
  ul {
    overflow-y: auto;
    li {
      height: 10vh;
      text-align: center;
      line-height: 10vh;
      font-size: 130%;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
    }
  }
`;
