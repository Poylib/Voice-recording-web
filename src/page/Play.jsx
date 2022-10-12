import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';
import '../components/Play/CustomPlay.css';

import Wave from '../components/Play/Wave';

const Play = () => {
  const musicTracks = [
    {
      name: 'Memories',
      src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
    },
    {
      name: 'Creative Minds',
      src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
    },
    {
      name: 'Acoustic Breeze',
      src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
    },
    {
      name: 'Sunny',
      src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    },
    {
      name: 'Tenderness',
      src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3',
    },
    {
      name: 'Once Again',
      src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    },
    {
      name: 'Sweet',
      src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
    },
    {
      name: 'Love',
      src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    },
    {
      name: 'Piano Moment',
      src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex(currentTrack => (currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1));
  };

  const handleClickNext = () => {
    setTrackIndex(currentTrack => (currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0));
  };

  let audioFile = sessionStorage.getItem('audioUrl');

  return (
    <section>
      <Title>제목: {musicTracks[trackIndex].name}</Title>
      <Wave />
      <div className='App'>
        <AudioPlayer
          autoPlay
          src={audioFile}
          onPlay={e => console.log('onPlay')}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    </section>
  );
};

let Title = styled.h1`
  width: 90%;
  margin: auto;
  margin-top: 7%;
  margin-bottom: 3%;
  font-size: 30px;
`;

export default Play;
