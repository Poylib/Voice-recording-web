import styled from 'styled-components';
import { mainColor } from '../../Theme';

const SideBar = ({ openSide }) => {
  return (
    <StyledSideBar openSide={openSide}>
      <div className='side-head'>녹음 리스트</div>
      <ul className='side-body'>
        {/* 녹음 로컬스토리지 저장 후 로직 추가 예정 */}
        <li>녹음된 파일 1</li>
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
    </StyledSideBar>
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
      height: 10vh;
      line-height: 10vh;
      font-size: 130%;
      text-align: center;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
    }
  }
`;
