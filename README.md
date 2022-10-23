# 오디오 재생 프로그램 프리온보딩 프론트 4팀

안녕하세요! 프론트 4팀입니다. 저희는 프론트엔드 3명으로 구성되어있습니다.
파이어베이스를 통해 Storage에 녹음본 저장 및 불러오기를 할 수 있도록 구현했습니다.

### 역할 분담

> **김진영)** 녹음 및 파이어베이스 Storage에 녹음본 저장 <br/>  **박찬영)** 파이어베이스 Storage 불러오기 및 SideBar <br/>  **정세영)** 재생 및 파형, 헤더 UI, 홈 화면 UI

## 배포 링크

https://jocular-empanada-50806c.netlify.app/

## 팀 노션

https://www.notion.so/aae6c129b9c448c0a0ded1c5fb783437?p=5ab94e6c8ddc4cf98493fe23b0c9399c&pm=c

## 사용한 기술 및 라이브러리

- Front-end : `React.js` `styled component`, `FireBase`, `MUI`, `React-Router-Dom`, `wavesurfer-react`,`react-icons`

## 후기

- 김진영 : [블로그 게시글](https://velog.io/@jinyoung985/Pre-Onboarding-%EC%98%A4%EB%94%94%EC%98%A4-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0)에 정리해두었습니다.

## 개인 별 구현 기능

### [김진영]

- **구현한 기능 :** 녹음 및 파이어베이스 Storage에 녹음본 저장
  - **녹음 :** 녹음 기능 및 타이머(녹음 가능 최대 시간), 또 녹음한 시간을 표시하는 기능을 구현했습니다.
  - **파이어베이스 업로드 :** 녹음이 끝나면 자동으로 파이어베이스 Storage에 업로드 되도록 구현했습니다.
  - **자세한건 [블로그 게시글](https://velog.io/@jinyoung985/Pre-Onboarding-%EC%98%A4%EB%94%94%EC%98%A4-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0)에 정리해두었습니다.**
    <br/>

### [박찬영]

- 구현한 기능 : 파이어베이스 Storage 불러오기 및 SideBar
  - **사이드바 :** 토글로 동작하는 사이드바에 플레이리스트 담아두도록 구현했습니다. 리스트에서 음원을 재생하거나 삭제 할 수 있도록 했습니다.
  - **파이어베이스 받아오기 :** 파이어베이스 Storage에 저장된 음원을 가져와 필요한 컴포넌트에 보내주고, 음원 리스트를 만들 수 있도록 구현했습니다.
    <br/>

### [정세영]

- 구현한 기능 : 재생 및 파형
  - **재생:** wavesurfer를 사용하여 재생 버튼을 누르면 녹음 파일이 재생 되도록 구현했습니다.
  - **파형:** wavesurfer를 사용하여 파형을 구현했습니다.

<br/>

---

## Reference

- 이 프로젝트는 비영리목적으로 HAII와의 기업협업 과제제출용으로 제작한 프로젝트입니다.
