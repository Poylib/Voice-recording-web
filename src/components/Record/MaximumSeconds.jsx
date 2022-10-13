import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const MaximumSeconds = ({ handleSelect, recOn, maxSeconds }) => {
  return (
    <MaximumSecondsBlock>
      <div className='title'>Choose Maximum Seconds</div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>limit</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Age'
            value={maxSeconds}
            onChange={handleSelect}
            disabled={recOn ? false : true}
          >
            <MenuItem value={30}>30 sec</MenuItem>
            <MenuItem value={60}>60 sec</MenuItem>
            <MenuItem value={90}>90 sec</MenuItem>
            <MenuItem value={120}>120 sec</MenuItem>
            <MenuItem value={150}>150 sec</MenuItem>
            <MenuItem value={180}>180 sec</MenuItem>
            <MenuItem value={Infinity}>no-limit</MenuItem>
          </Select>
        </FormControl>
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
    margin-bottom: 15px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default MaximumSeconds;
