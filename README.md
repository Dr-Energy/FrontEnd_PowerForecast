# DoctorE FrontEnd

### 날씨 빅데이터 콘테스트 : 기상에 따른 공동주택 전력수요 예측 개선

### 주제
기상에 따른 공동주택 전력수요 예측 개선

### 개발 목적
기상 변동에 따라 전력수요는 크게 변동될 수 있습니다. 보다 정밀한 전력수요 예측을 통해 전력 공급의 안정성을 높이고, 효율적인 에너지 관리가 가능하도록 합니다.

## 개발환경

- **개발 기간**: 2024.05.28 ~ 2024.06.27
- **프로젝트 팀 구성**: 이영인(Backend), 김우정(FrontEnd), 이세련(DataAnalysis)
- **개발환경**: IDE(Visual Studio Code), 브라우저(Chrome), 개발언어(Javascript)
- **사용 기술**: React, Recoil, Axios, Tailwind, HTML5

## 주요 기능

[전체 시연 동영상](https://youtu.be/izu8rs2vhy0)

1. **지역을 선택하면 기상청, 한국전력 API를 통해 날씨 및 전력 정보를 표현하는 기능**

   ![0823 (1)](https://github.com/user-attachments/assets/0223fc2a-81b9-4283-8141-ee43be4d221e)

2. **로그인한 사용자의 등록된 지역에 대해 전력 이상이 발생 시 알람 기능(웹소켓을 사용하여 구현)**

   ![alarm](https://github.com/user-attachments/assets/da7785f4-0d83-427c-aa84-975424039217)

3. **서버와 토큰을 교환하여 사용자의 정보를 불러오고 수정하여 업데이트하는 기능**

   ![edit](https://github.com/user-attachments/assets/c4f2a35b-f128-41c5-8d8b-04dfc7194041)

4. **데이터베이스에 등록된 전화번호를 입력하여 아이디를 찾고, 아이디와 전화번호를 이용하여 암호를 찾는 기능**

   ![find](https://github.com/user-attachments/assets/e7c0f766-0b9f-42d1-94d0-733434a56320)

## 개발 과정

- **2024.05.28 ~ 2024.06.04**
  - 웹사이트 레이아웃 만들기, 네비게이션 바 생성
  - 라우트로 페이지 주소 설정
  - 마이페이지, 내 정보 수정 컴포넌트 생성
  - 지역 선택 반응형 셀렉트박스 생성
- **2024.06.05**
  - 탈퇴버튼
  - 아이디, 비밀번호 찾기 컴포넌트
- **2024.06.07**
  - 대시보드의 지역선택을 왼쪽에 두고 싶은데 안옮겨짐 ->안바꿔도 될거 같음 또는 모두 같이 뜨게 만들기
  - 회원정보 수정의 지역을 선택했을 때 div크기를 자동으로 조절되게 하고 싶음 -> 교수님이 알아봐주신다고 함
  - 대시보드에 알람이력 start로 바꾸기 -> items-start로 바꾸면 제일위로 올라감
- **2024.06.09**
  - 대시보드와 알람이력의 컴포넌트 위치가 같았으면 좋겠음
  - 오늘의 기상에 따른 아이콘 찾기
- **2024.06.10**
  - 로그인 표시하기, 로그인 유지하기
  - 로그인 안했을때 프로필 안나오게
  - 로그인 안하고 마이페이지 이동할때 로그인하라고 알림
  - 웨더카드 글자색 바꾸기 배경색 바꾸기 -> 눈에 띄게
- **2024.06.12**
  - 웨더카드 value 정렬
  - Register 데이터 보낼때 formData만들기
  - 마이페이지 정보 당겨오기
  - 탈퇴하기
  - 로그인 실패 시 alert
  - 알람이력 백에서 시간, 지역, 이벤트 주면 끼워맞춰서 보여주기
- **2024.06.13**
  - 알람이력 페치받기
  - 회원정보 수정
- **2024.06.14**
  - 아이디 중복확인 버튼 만들기
  - 알람리스트 컴포넌트로 따로 빼기
- **2024.06.18**
  - 전역상태관리 Recoil로 변경
  - 회원정보 수정 시 닉네임 미적용 이슈
  - 지역선택 후 페이지 변경 시
  - 날씨 페치받기
- **2024.06.19**
  - 웨더카드의 change값 양수로 변경
  - 웨더카드 로딩만들기
  - 날씨 페치 다른지역 되는지 확인하기
  - 웨더카드 날씨에 따른 아이콘 반응형으로 바꾸기
  - 웨더카드 어제와 수치 같을때 같은 아이콘 설정
  - 유저별 이미지 바꾸기(이미지 옵션을 선택할 수 있으면 더 좋을거 같음)
  - 알람리스트 아이콘 넣기
- **2024.06.20**
  - 비밀번호 필수조건
  - 백엔드 웹소켓 연결 후 알람이 발생한 경우 알람 설정(로그인하면 자동으로 웹소켓 연결되게)
  - 알람페이지 확인하면 알람아이콘 삭제
  - alertCount css조정하기
- **2024.06.24**
  - ID, PW찾기
  - 예측모델 그래프 시작
- **2024.06.25**
  - 게이지 컴포넌트
  - 윈도우 크기조절
- **2024.06.26**
  - 그래프, 게이지 서버 연결
  - 파비콘 변경
  - 푸터 수정
- **2024.06.27**
  - 알림이력 수정
  - 전반적 오류 수정
