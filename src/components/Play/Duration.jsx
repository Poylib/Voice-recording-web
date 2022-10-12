import styled from 'styled-components';

const Duration = () => {
  return (
    <Section>
      <span>00:00.00</span>
    </Section>
  );
};

let Section = styled.section`
  border: 1px solid lightgray;
  margin-top: 17%;
  text-align: center;
  span {
    font-size: 60px;
    color: #777;
  }
`;

export default Duration;
