import styled from 'styled-components';
import Download from '../components/Play/Download';
import WaveForm from '../components/Play/WaveForm';

const Play = () => {
  return (
    <section>
      <Title>제목:</Title>
      <WaveForm />
      <Download />
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
