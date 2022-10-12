import { useState, useCallback, useEffect, useRef } from 'react';
import PlayButton from '../components/Record/PlayButton';
import { FaMicrophoneAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { mainColor } from '../theme';

const Record = () => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [maxSeconds, setMaxSeconds] = useState(30);
  const countRef = useRef(null);

  const startHandler = () => {
    countRef.current = setInterval(() => setCount(c => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(countRef.current);
    countRef.current = null;
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

  const startRecord = () => {
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
        if (e.playbackTime > maxSeconds) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
            stopHandler();
            setButtonClicked(false);
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

  const stopRecord = () => {
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

  const handleSelect = e => {
    setMaxSeconds(e.target.value);
    console.log(e.target.value);
  };

  return (
    <RecordBlock>
      <FaMicrophoneAlt className='record-icon' alt='record' size={50} />
      <p className='timer'>{count.toHHMMSS()}</p>
      <div className='select-box'>
        <label for='max-select'>Maximum Seconds</label>
        <select name='pets' id='max-select' onChange={handleSelect}>
          <option value={30}>30 sec</option>
          <option value={60}>60 sec</option>
          <option value={90}>90 sec</option>
          <option value={120}>120 sec</option>
          <option value={150}>150 sec</option>
          <option value={180}>180 sec</option>
        </select>
      </div>
      <PlayButton //
        isRecord={true}
        onRec={onRec}
        startRecord={startRecord}
        stopRecord={stopRecord}
        startHandler={startHandler}
        stopHandler={stopHandler}
        onSubmitAudioFile={onSubmitAudioFile}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
    </RecordBlock>
  );
};

const RecordBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  .record-icon {
    color: ${mainColor};
  }
  .timer {
    font-size: 32px;
    font-weight: 700;
    margin: 40px 0 20px 0;
  }
  .select-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 700;

    #max-select {
      width: 80px;
      margin: 10px 0;
    }
  }
`;

export default Record;
