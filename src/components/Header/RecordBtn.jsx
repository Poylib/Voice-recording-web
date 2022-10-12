import styled from 'styled-components';
import { FaMicrophoneAlt } from 'react-icons/fa';

const RecordBtn = () => {
  return (
    <Container>
      <FaMicrophoneAlt className='record-icon' alt='go to record' />
    </Container>
  );
};

let Container = styled.div`
  margin-left: 2%;

  .record-icon {
    font-size: 180%;
    color: #00aac5;
  }
`;

export default RecordBtn;
