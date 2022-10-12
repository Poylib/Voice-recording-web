import styled from 'styled-components';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { mainColor } from '../../Theme';

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
    color: ${mainColor};
  }
`;

export default RecordBtn;
