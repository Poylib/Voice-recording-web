import styled from 'styled-components';
import RecordBtn from './RecordBtn';
import Logo from './Logo';
import MenuBtn from './MenuBtn';

const Header = () => {
  return (
    <Section>
      <RecordBtn />
      <Logo />
      <MenuBtn />
    </Section>
  );
};

let Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 15px;
`;

export default Header;
