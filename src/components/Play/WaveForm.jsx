import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';

const WaveForm = () => {
  const [play, setPlay] = useState(false);

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
        container: '#waveform',
        backend: 'WebAudio',
        height: 80,
        progressColor: '#00aac5',
        responsive: true,
        waveColor: '#C4C4C4',
        cursorColor: 'transparent',
      });
      wavesurfer.current.load(url);
    }
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

export default WaveForm;
