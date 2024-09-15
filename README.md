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

- **2024.05.28 ~ 2024.06.28**
  - 웹사이트 레이아웃 만들기, 네비게이션 바 생성
  - 라우트로 페이지 주소 설정
  - 마이페이지, 내 정보 수정 컴포넌트 생성
  - 지역 선택 반응형 셀렉트박스 생성
