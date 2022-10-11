import { useState, useCallback, useEffect, useRef } from 'react';
import PlayButton from '../components/Record/PlayButton';
import styled from 'styled-components';

const Record = () => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const startHandler = () => {
    countRef.current = setInterval(() => setCount(c => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  };

  const resetHandler = () => {
    stopHandler();
    setCount(0);
  };

  Number.prototype.toHHMMSS = function () {
    let myNum = parseInt(this, 10);
    let hours = Math.floor(myNum / 3600);
    let minutes = Math.floor((myNum - hours * 3600) / 60);
    let seconds = myNum - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  };

  const onRecord = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 60) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecord = () => {
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl));
    }
    const sound = new File([audioUrl], 'soundBlob', { lastModified: new Date().getTime(), type: 'audio' });
    console.log(sound);
  }, [audioUrl]);

  return (
    <RecordBlock>
      <p className='timer' onClick={startHandler}>
        {count.toHHMMSS()}
      </p>
      <PlayButton onClick={onRec ? onRecord : offRecord} isRecord={true} />
      <button onClick={onSubmitAudioFile}>녹음 결과 콘솔에 찍기</button>
    </RecordBlock>
  );
};

const RecordBlock = styled.div``;

export default Record;
