import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import styled from 'styled-components';

const MaximumSeconds = ({ recOn, maxSeconds, setMaxSeconds }) => {
  const handleSelect = e => {
    console.log(e.target.value);
    setMaxSeconds(e.target.value);
  };

  return (
    <MaximumSecondsBlock>
      <div className='title'>타이머 설정 (현재 {maxSeconds}초)</div>
      <Box sx={{ minWidth: 240 }}>
        <Slider defaultValue={30} onChange={handleSelect} min={3} max={180} disabled={recOn ? false : true} />
      </Box>
    </MaximumSecondsBlock>
  );
};

const MaximumSecondsBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  .title {
    margin-bottom: 5px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 480px) {
    .title {
      font-size: 13px;
    }
  }
`;

export default MaximumSeconds;
