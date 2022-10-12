import { useState } from 'react';
import { FaPlay, FaStop, FaPause, FaMicrophoneAlt } from 'react-icons/fa';
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
          <FaMicrophoneAlt size={35} alt='play' />
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
    animation: clickEffect 0.8s ease-out;

    &:active {
      background-color: #016373;
    }
  }

  @keyframes clickEffect {
    0% {
      opacity: 1;
      width: 0.5em;
      height: 0.5em;
      margin: -0.25em;
      border-width: 0.3rem;
    }
    100% {
      opacity: 0.1;
      width: 15em;
      height: 15em;
      margin: -7.5em;
      border-width: 0.01rem;
    }
  }
`;

export default PlayButton;
