import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Wave = () => {
  const waveformRef = useRef();

  useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
      });
    }
  }, []);
  return (
    <StyledWave>
      <div ref={waveformRef}></div>
    </StyledWave>
  );
};

export default Wave;

const StyledWave = styled.div``;
