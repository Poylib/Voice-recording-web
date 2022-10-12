import styled from 'styled-components';
import logo from '../../assets/img/Header/haii_logo.png';

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt='HAII recoder logo'></img>
    </Container>
  );
};

let Container = styled.div`
  line-height: 35px;
  width: 40%;
  max-width: 250px;
  min-width: 180px;
  text-align: center;
  img {
    width: 100%;
  }
`;

export default Logo;
