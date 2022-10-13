import { useState } from 'react';
import styled from 'styled-components';
import RecordBtn from './RecordBtn';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import SideBar from './SideBar';

const Header = ({ audioList, recOn }) => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <StyledHeader>
        <RecordBtn recOn={recOn} />
        <Logo recOn={recOn} />
        <MenuBtn openSide={openSide} setOpenSide={setOpenSide} recOn={recOn} />
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
