import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/Header/haii_logo.png';

const Logo = ({ recOn }) => {
  const navigate = useNavigate();

  const goHome = () => {
    recOn && navigate('/');
  };

  return (
    <Container recOn={recOn}>
      <img src={logo} alt='HAII recoder logo' onClick={goHome}></img>
    </Container>
  );
};

let Container = styled.div`
  width: 40%;
  max-width: 250px;
  min-width: 180px;
  line-height: 35px;
  text-align: center;
  cursor: ${props => (props.recOn ? 'pointer' : 'not-allowed')};
  img {
    width: 100%;
  }
`;

export default Logo;
