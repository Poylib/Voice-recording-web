import styled from 'styled-components';

const MaximumSeconds = ({ handleSelect, onRec }) => {
  return (
    <MaximumSecondsBlock>
      <label htmlFor='max-select'>Maximum Seconds</label>
      <select name='pets' id='max-select' onChange={handleSelect} disabled={onRec ? false : true}>
        <option value={30}>30 sec</option>
        <option value={60}>60 sec</option>
        <option value={90}>90 sec</option>
        <option value={120}>120 sec</option>
        <option value={150}>150 sec</option>
        <option value={180}>180 sec</option>
      </select>
    </MaximumSecondsBlock>
  );
};

const MaximumSecondsBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 700;

  #max-select {
    width: 90px;
    margin-top: 10px;
  }
`;

export default MaximumSeconds;
