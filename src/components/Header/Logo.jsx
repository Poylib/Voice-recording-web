import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/Header/haii_logo.png';

const Logo = () => {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='HAII recoder logo'></img>
      </Link>
    </Container>
  );
};

let Container = styled.div`
  width: 40%;
  max-width: 250px;
  min-width: 180px;
  line-height: 35px;
  text-align: center;
  img {
    width: 100%;
  }
`;

export default Logo;
