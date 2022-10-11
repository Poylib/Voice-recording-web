import { useState } from 'react';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';
import styled from 'styled-components';

const PlayButton = ({ isRecord }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const clickButton = () => setButtonClicked(!buttonClicked);
  return (
    <PlayButtonBlock>
      <button onClick={clickButton}>{buttonClicked ? isRecord ? <FaStop size={30} /> : <FaPause size={30} /> : <FaPlay size={30} />}</button>
    </PlayButtonBlock>
  );
};

const PlayButtonBlock = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: none;
    border-radius: 100%;
    background-color: #00aac5;
    color: white;
    cursor: pointer;

    &:active {
      background-color: #016373;
    }
  }
`;

export default PlayButton;
