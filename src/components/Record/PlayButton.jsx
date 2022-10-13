import { useState } from 'react';
import { FaPlay, FaStop, FaPause, FaMicrophoneAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { mainColor } from '../../theme';

const PlayButton = ({
  recOn,
  startRecord,
  stopRecord,
  startHandler,
  stopHandler,
  buttonClicked,
  setButtonClicked,
  setIsMessageOn,
}) => {
  const clickButton = () => setButtonClicked(!buttonClicked);
  return (
    <PlayButtonBlock>
      <button
        onClick={() => {
          clickButton();
          if (recOn) {
            startRecord();
            startHandler();
            setIsMessageOn(false);
          } else {
            stopRecord();
            stopHandler();
          }
        }}
      >
        {buttonClicked ? <FaStop className='icon' alt='stop' /> : <FaMicrophoneAlt className='icon' alt='play' />}
      </button>
    </PlayButtonBlock>
  );
};

const PlayButtonBlock = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 125px;
    border: none;
    border-radius: 100%;
    background-color: ${mainColor};
    color: white;
    cursor: pointer;

    .icon {
      transform: scale(3);
    }

    &:active {
      background-color: #016373;
    }
  }

  @media screen and (max-width: 480px) {
    button {
      width: 100px;
      height: 100px;

      .icon {
        transform: scale(2);
      }
    }
  }
`;

export default PlayButton;
