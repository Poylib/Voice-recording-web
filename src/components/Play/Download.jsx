import styled from 'styled-components';

import { BiDownload } from 'react-icons/bi';

const Download = () => {
  // useEffect(() => {
  //   if (track) {
  //     const fileExtension = track.src.split('.').pop();
  //     const url = track.src.replace(fileExtension, audioType);
  //     setTrackUrl(url);
  //   }
  // }, [track, audioType]);

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