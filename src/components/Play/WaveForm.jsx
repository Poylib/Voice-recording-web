import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { mainColor } from '../../theme';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

const WaveForm = () => {
  const [play, setPlay] = useState(true);

  const track = document.querySelector('#track');
  const url = 'https://www.bensound.com/bensound-music/bensound-love.mp3';

  const waveformRef = useRef();
  const wavesurfer = useRef(null);

  const handlePlay = () => {
    setPlay(play => !play);
    wavesurfer.current.playPause();
  };

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 3,
        barRadius: 3,
        barGap: 2,
        barMinHeight: 1,
        cursorWidth: 1,
        backend: 'WebAudio',
        height: 180,
        progressColor: '#00aac5',
        responsive: true,
        waveColor: '#C4C4C4',
        cursorColor: 'transparent',
      });
      wavesurfer.current.load(url);
    }
    return () => wavesurfer.current.destroy();
  }, [url]);
  return (
    <WaveformContianer>
      <PlayButton onClick={handlePlay}>
        {play ? <BsFillPlayFill className='play-btn' /> : <BsFillPauseFill className='pause-btn' />}
      </PlayButton>
      <Wave id='waveform' ref={waveformRef} />
      <audio id='track' src={url} />
      <div>0.52</div>
    </WaveformContianer>
  );
};

const WaveformContianer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 87%;
  margin: auto;
  margin-top: 7%;
  background: transparent;
  gap: 2rem;
  div {
    font-size: 30px;
  }
`;

const Wave = styled.div`
  width: 100%;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 70px;
  background: #b9e4eb;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: ${mainColor};
    color: white;
  }
  .play-btn {
    font-size: 30px;
  }
  .pause-btn {
    font-size: 30px;
  }
`;
export default WaveForm;
