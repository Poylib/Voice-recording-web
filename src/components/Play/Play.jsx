import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';
import './CustomPlay.css';

import Wave from './Wave';

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
    {
      name: 'E.R.F',
      src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
    },
    {
      name: 'Dreams',
      src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    },
    {
      name: 'A Day To Remember',
      src: 'https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music',
    },
    {
      name: 'Adventure',
      src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
    },
    {
      name: 'Photo Album',
      src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
    },
    {
      name: 'November',
      src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex(currentTrack => (currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1));
  };

  const handleClickNext = () => {
    setTrackIndex(currentTrack => (currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0));
  };

  return (
    <section>
      <Title>제목: {musicTracks[trackIndex].name}</Title>
      <div className='App'>
        <AudioPlayer
          autoPlay
          src={musicTracks[trackIndex].src}
          layout='stacked-reverse'
          onPlay={e => console.log('onPlay')}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
      <Wave />
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