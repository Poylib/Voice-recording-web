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
  text-align: center;
  line-height: 35px;
  .record-icon {
    font-size: 200%;
    color: ${mainColor};
  }
`;

export default RecordBtn;
