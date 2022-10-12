import { useState, useCallback, useEffect, useRef } from 'react';
import PlayButton from '../components/Record/PlayButton';
import MaximumSeconds from '../components/Record/MaximumSeconds';
import styled from 'styled-components';

const Record = ({ audioList, setAudioList }) => {
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

  useEffect(() => {
    if (audioUrl && onRec) {
      onSubmitAudioFile();
    }
  }, [onRec]);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();

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
    const fullLength = audioList.length;
    if (audioUrl) {
      setAudioList([
        ...audioList,
        {
          id: fullLength !== 0 ? audioList[fullLength - 1].id + 1 : 0,
          title: year + '-' + month + '-' + date + '/' + hours + ':' + minutes,
          url: URL.createObjectURL(audioUrl),
        },
      ]);
      console.log(audioList);
    }
  }, [audioUrl]);

  const handleSelect = e => {
    setMaxSeconds(e.target.value);
  };

  return (
    <RecordBlock onRec={onRec}>
      <p className='timer'>{count.toHHMMSS()}</p>
      <MaximumSeconds handleSelect={handleSelect} onRec={onRec} />
      <div className='recording-alert'>
        <div className='recording-light'>
          <div className={onRec ? 'backlight-off' : 'backlight-on'} />
        </div>
        REC
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
  height: 85vh;

  .timer {
    font-size: 32px;
    font-weight: 700;
    margin: 40px 0 20px 0;
  }

  .recording-alert {
    display: flex;
    align-items: center;
    margin: 90px 0 30px 0;
    color: ${props => (props.onRec ? 'black' : 'red')};
    font-weight: 700;

    .recording-light {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 13px;
      width: 13px;
      border-radius: 100%;
      margin-right: 5px;
      background-color: ${props => (props.onRec ? 'black' : 'red')};
      animation: clickEffect 0.8s ease-out;

      .backlight-on {
        position: absolute;
        width: 26px;
        height: 26px;
        border-radius: 20px;
        background-color: rgba(208, 107, 0, 0.6);
        animation: scale 2s infinite alternate;
      }
    }
  }

  @keyframes scale {
    0%,
    65% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Record;
