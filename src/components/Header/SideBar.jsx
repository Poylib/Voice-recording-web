import styled from 'styled-components';
import { mainColor } from '../../Theme';

const SideBar = ({ openSide }) => {
  return (
    <SideBarBlock openSide={openSide}>
      <ul>
        <li>fdsafs</li>
        <li>fdsafs</li>
        <li>fdsafs</li>
        <li>fdsafs</li>
      </ul>
    </SideBarBlock>
  );
};

export default SideBar;

const SideBarBlock = styled.div`
  transform: translateX(${({ openSide }) => (openSide ? '-100%' : '0%')});
  position: fixed;
  z-index: 20;
  padding-top: 40px;
  left: 100%;
  top: 0;
  height: 100%;
  overflow-y: auto;
  width: 100vw;
  transition: 0.3s;
  color: ${mainColor};
  background-color: #f6f6f6;
`;
