import styled from 'styled-components';

const Empty = () => {
  return (
    <Section>
      <div>재생 목록이 없습니다.</div>
      <div>녹음을 시작해주세요!</div>
    </Section>
  );
};

const Section = styled.section`
  div {
    width: 30%;
    margin: auto;
    margin-top: 4%;
    font-size: 20px;
    color: gray;
    text-align: center;
  }
`;

export default Empty;
