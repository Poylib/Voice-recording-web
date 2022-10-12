import styled from 'styled-components';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { mainColor } from '../../Theme';
import { Link } from 'react-router-dom';

const RecordBtn = () => {
  return (
    <Container>
      <Link to='/record'>
        <FaMicrophoneAlt className='record-icon' alt='go to record' />
      </Link>
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
