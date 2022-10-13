import styled from 'styled-components';
<<<<<<< HEAD
import { useState } from 'react';
import { BiDownload } from 'react-icons/bi';

const Download = ({ selectedRecord }) => {
=======
import { BiDownload } from 'react-icons/bi';

const Download = () => {
>>>>>>> develop
  let url = 'https://www.bensound.com/bensound-music/bensound-love.mp3';
  return (
    <DownloadButton href={url}>
      <BiDownload className='download-btn' />
    </DownloadButton>
  );
};

let DownloadButton = styled.a`
  width: 40px;
  height: 40px;
  .download-btn {
    color: #aaa;
    width: 40px;
    height: 40px;
  }
`;

export default Download;
