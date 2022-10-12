import styled from 'styled-components';
import RecordBtn from './RecordBtn';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import { useState } from 'react';
import SideBar from './SideBar';

const Header = () => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <StyledHeader>
        <RecordBtn />
        <Logo />
        <MenuBtn openSide={openSide} setOpenSide={setOpenSide} />
      </StyledHeader>
      <SideBar openSide={openSide} />
    </>
  );
};

const StyledHeader = styled.div`
  height: 35px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

export default Header;
