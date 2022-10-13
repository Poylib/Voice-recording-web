import styled from 'styled-components';
import Wave from '../components/Play/Wave';

const Play = () => {
  return (
    <section>
      <div className='App'>
        <Title>제목:</Title>
        <Wave />
      </div>
    </section>
  );
};

let Title = styled.h1`
  width: 90%;
  margin: auto;
  margin-top: 7%;
  margin-bottom: 3%;
  font-size: 30px;
`;

export default Play;
