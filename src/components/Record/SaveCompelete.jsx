import { useEffect } from 'react';
import { mainColor } from '../../theme';
import styled from 'styled-components';

const SaveCompelete = ({ isMessageOn, setIsMessageOn }) => {
  useEffect(() => {
    isMessageOn && setTimeout(() => setIsMessageOn(false), 2900);
  }, [isMessageOn]);
  return <SaveCompeleteBlock>{isMessageOn && 'Firebase Storage에 저장되었습니다.'}</SaveCompeleteBlock>;
};

const SaveCompeleteBlock = styled.div`
  position: absolute;
  bottom: 5vh;
  color: ${mainColor};
  font-size: 16.5px;
  font-weight: 700;
`;

export default SaveCompelete;
