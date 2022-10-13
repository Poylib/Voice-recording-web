import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { mainColor } from '../../theme';

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
        // container: '#waveform',
        backend: 'WebAudio',
        height: 80,
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
      <PlayButton onClick={handlePlay}>{play ? 'Play' : 'Pause'}</PlayButton>
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
  height: 100px;
  width: 85%;
  margin: auto;
  background: transparent;
  gap: 2rem;
`;

const Wave = styled.div`
  width: 100%;
  height: 90px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #c2f2fa;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: ${mainColor};
  }
`;
export default WaveForm;
