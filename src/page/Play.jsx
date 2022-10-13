import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Download from '../components/Play/Download';
import List from '../components/Play/List';
import WaveForm from '../components/Play/WaveForm';

const Play = ({ selectedRecord }) => {
  // const navigete = useNavigate();
  // useEffect(() => {
  //   if (selectedRecord === '') navigete('/record');
  // }, [selectedRecord]);
  return (
    <Section>
      <Container>
        <Title>제목:2022.10.13</Title>
        <Download />
      </Container>
      {selectedRecord !== '' ? <WaveForm selectedRecord={selectedRecord} /> : <span>empty</span>}
      {/* <WaveForm selectedRecord={selectedRecord} /> */}
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
