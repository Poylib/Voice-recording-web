import styled from 'styled-components';

const List = () => {
  return (
    <Section>
      <div className='nav'>다음 재생 목록</div>
      <div className='list-container'>
        <div className='title'>제목</div>
        <div className='time-duration-box'>
          <div className='time'>녹음 시간</div>
          <div className='duration'>duration</div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 90%;
  margin: auto;
  margin-top: 10%;
  background-color: #eeeeee;

  .nav {
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
    font-size: 25px;
  }
  .list-container {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
    .title {
      padding-left: 10px;
      font-size: 20px;
    }
    .time-duration-box {
      display: flex;
      .time {
      }
      .duration {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;

export default List;
