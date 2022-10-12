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
  width: 28%;
  img {
    width: 100%;
  }
`;

export default Logo;
