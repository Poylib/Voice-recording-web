import { useState } from 'react';
import styled from 'styled-components';
import RecordBtn from './RecordBtn';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import SideBar from './SideBar';

const Header = ({ audioList }) => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <StyledHeader>
        <RecordBtn />
        <Logo />
        <MenuBtn openSide={openSide} setOpenSide={setOpenSide} />
      </StyledHeader>
      <SideBar openSide={openSide} audioList={audioList} />
    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin: 10px 0;
  height: 35px;
`;

export default Header;
