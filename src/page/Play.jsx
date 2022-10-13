import styled from 'styled-components';
import WaveForm from '../components/Play/WaveForm';

const Play = () => {
  return (
    <section>
      <Title>제목:</Title>
      <WaveForm />
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
