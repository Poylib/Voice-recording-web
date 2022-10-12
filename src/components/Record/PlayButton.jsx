import { useState } from 'react';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';
import styled from 'styled-components';
import { mainColor } from '../../theme';

const PlayButton = ({
  isRecord,
  onRec,
  startRecord,
  stopRecord,
  startHandler,
  stopHandler,
  onSubmitAudioFile,
  buttonClicked,
  setButtonClicked,
}) => {
  const clickButton = () => setButtonClicked(!buttonClicked);
  return (
    <PlayButtonBlock>
      <button
        onClick={() => {
          clickButton();
          if (isRecord) {
            if (onRec) {
              startRecord();
              startHandler();
            } else {
              stopRecord();
              stopHandler();
              onSubmitAudioFile();
            }
          }
        }}
      >
        {buttonClicked ? (
          isRecord ? (
            <FaStop size={30} alt='stop' />
          ) : (
            <FaPause size={30} alt='pause' />
          )
        ) : (
          <FaPlay size={30} alt='play' />
        )}
      </button>
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
    background-color: ${mainColor};
    color: white;
    cursor: pointer;

    &:active {
      background-color: #016373;
    }
  }
`;

export default PlayButton;
