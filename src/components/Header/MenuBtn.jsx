import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const MenuBtn = () => {
  return (
    <Container>
      <FiMenu className='menu-btn' />
    </Container>
  );
};

let Container = styled.div`
  margin-right: 2%;

  .menu-btn {
    font-size: 190%;
    color: #aaa;
  }
`;

export default MenuBtn;
