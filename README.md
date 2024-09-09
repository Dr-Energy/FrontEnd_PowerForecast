# DoctorE FrontEnd
- ### 날씨 빅데이터 콘테스트 : 기상에 따른 공동주택 전력수요 예측 개선 프론트엔드<br>
- ### 주제 : 기상에 따른 공동주택 전력수요 예측 개선<br>
- ### 개발목적 : 기상 변동에 따라 전력수요는 크게 변동될 수 있습니다. 보다 정밀한 전력수요 예측을 통해 전력 공급의 안정성을 높이고, 효율적인 에너지 관리가 가능하도록 합니다.<br><br>
## 개발환경
- ### 개발기간: 2024.05.28 ~ 2024.06.27
- ### 프로젝트 팀 구성: 이영인(Backend), 김우정(FrontEnd), 이세련(DataAnalysis)
- ### 개발환경: IDE(Visual Studio Code), 브라우저(Chrome)
- ### 사용기술: React, Recoil, Axios, Tailwind, HTML5<br><br>
## 주요기능 <a href="https://youtu.be/izu8rs2vhy0">[전체 시연동영상]</a> <br>
1. 지역을 선택하면 기상청, 한국전력api를 통해 날씨 및 전력정보를 표현하는 기능<br><br>
![0823 (1)](https://github.com/user-attachments/assets/0223fc2a-81b9-4283-8141-ee43be4d221e)<br><br><br>
2. 로그인한 사용자의 등록된 지역에 대해 전력이상이 발생 시 알람기능(웹소켓을 사용하여 구현)<br><br>
![alarm](https://github.com/user-attachments/assets/da7785f4-0d83-427c-aa84-975424039217)
<br><br><br>
3. 서버와 토큰을 교환하여 사용자의 정보를 불러오고 수정하여 업데이트하는 기능<br><br>
![edit](https://github.com/user-attachments/assets/c4f2a35b-f128-41c5-8d8b-04dfc7194041)
<br><br><br>
4. 데이터베이스에 등록되어있는 전화번호를 입력하여 아이디를 찾고 아이디와 전화번호를 이용하여 암호를 찾는 기능<br><br>
![find](https://github.com/user-attachments/assets/e7c0f766-0b9f-42d1-94d0-733434a56320)
<br><br><br>
## 개발과정
### 24.05.28 ~ 24.06.28
- 웹사이트 레이아웃 만들기,네비게이션 바 생성
- 라우트로 페이지 주소 설정
- 마이페이지, 내 정보 수정 컴포넌트
- 지역선택 반응형 셀렉트박스 생성
