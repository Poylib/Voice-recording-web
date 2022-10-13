import styled from 'styled-components';
import Download from '../components/Play/Download';
import List from '../components/Play/List';
import WaveForm from '../components/Play/WaveForm';

const Play = () => {
  return (
    <Section>
      <Container>
        <Title>제목:2022.10.13</Title>
        <Download />
      </Container>
      <WaveForm />
      <List />
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
