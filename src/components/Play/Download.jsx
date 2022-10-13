import styled from 'styled-components';

const Download = () => {
  let url = 'https://www.bensound.com/bensound-music/bensound-love.mp3';
  return <DownloadButton href={url}>Download</DownloadButton>;
};

let DownloadButton = styled.a``;

export default Download;
