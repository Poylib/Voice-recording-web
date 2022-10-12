import styled from 'styled-components';
import { mainColor } from '../../Theme';

const MenuBtn = ({ openSide, setOpenSide }) => {
  const BtnChange = e => {
    setOpenSide(!openSide);
    e.currentTarget.classList.toggle('change');
  };
  return (
    <Container onClick={BtnChange}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </Container>
  );
};

let Container = styled.div`
  z-index: 30;
  div {
    border-radius: 5px;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: ${mainColor};
    margin: 6px 0;
    transition: 0.4s;
  }
  &.change {
    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-8px, 8px);
      transform: rotate(-45deg) translate(-8px, 8px);
      background-color: white;
    }
    .bar2 {
      opacity: 0;
      background-color: white;
    }
    .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
      background-color: white;
    }
  }
`;

export default MenuBtn;
