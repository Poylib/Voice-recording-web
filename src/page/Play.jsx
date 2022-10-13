import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Download from '../components/Play/Download';
import Empty from '../components/Play/Empty';
import WaveForm from '../components/Play/WaveForm';

const Play = ({ selectedRecord }) => {
  const params = useParams();

  return (
    <Section>
      {params.id && (
        <Container>
          <Title>{`제목 : ${params.id}`}</Title>
          <Download />
        </Container>
      )}

      {selectedRecord !== '' ? <WaveForm selectedRecord={selectedRecord} /> : <span>empty</span>}
    </Section>
  );
};

const Section = styled.section`
  margin-top: 20%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 30px;
`;

export default Play;
