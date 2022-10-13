import styled from 'styled-components';

const Download = () => {
  // useEffect(() => {
  //   if (track) {
  //     const fileExtension = track.src.split('.').pop();
  //     const url = track.src.replace(fileExtension, audioType);
  //     setTrackUrl(url);
  //   }
  // }, [track, audioType]);

  let url = 'https://www.bensound.com/bensound-music/bensound-love.mp3';
  return <DownloadButton href={url}>Download</DownloadButton>;
};

let DownloadButton = styled.a``;

export default Download;
