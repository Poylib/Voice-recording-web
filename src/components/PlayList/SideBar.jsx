import styled from 'styled-components';

const SideBar = menu => {
  return <SideBarBlock></SideBarBlock>;
};

export default SideBar;

const SideBarBlock = styled.div`
  transform: translateX(${({ menu }) => (menu ? '-100%' : '0%')});
  position: fixed;
  z-index: 20;
  left: 100%;
  top: 0;
  height: 100%;
  overflow-y: auto;
  width: 70vw;
  transition: 0.3s;
`;
