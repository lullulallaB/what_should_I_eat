# what_should_I_eat
# 🤖 챙구봇 - 감정 기반 편의점 메뉴 추천 MVP

혼밥러, 귀차니스트, 무기력자들을 위한  
**감정 기반 편의점 메뉴 추천 서비스**입니다.

- 개발 기간: 2025.04.17 (하루 만에 MVP 구현)
- 기획/디자인/로직/배포 모두 1인 제작
- "무기력한 날, 메뉴 고민도 하기 싫은 사람들을 위한 B급감성 챗봇"
&
- 무기력하지만 무언가 만들고 싶었던 하루를 의미 있게 보내기 위한 실험
- 감정 기반 추천 UX 실험 + B급감성 챗봇 구현
- 실사용 가능한 라이트 챗봇 MVP 구현 & 린런칭 테스트


---

## 📍 데모 링크

👉 https://changu-bot.netlify.app/changu

---

## 🧠 기능 소개

- 감정 선택 + 메뉴 선택 → 맞춤형 B급감성 진단 출력
- 실제 편의점 PB 제품 기반 추천 (GS25, 이마트24, 세븐일레븐 등)
- 감정/제품별 B급감성 대사 700+ 조합
- 모바일 최적화 UI + 말풍선 애니메이션 지원

---

## ⚒️ 기술 스택

- Frontend: Vanilla HTML / CSS / JS
- 배포: Netlify (리디렉션 및 UTM 파라미터 포함)
- 분석: Google Analytics + UTM 트래킹
- 협업툴: ChatGPT (대사 생성), DALL·E (일러스트), Notion (기획정리)

---

## 🗂 디렉토리 구조
02_publishing/ 
├── index.html // 메인 페이지 
├── js/ 
│   ├── changu.js // 카드 생성, 랜덤 추천 로직 
│   ├── changuDialogues.js // 병맛 대사 전체 
│   └── product_data.js // 편의점 제품 DB 
├── css/ 
│   └── index.css // 스타일 
└── img/ // 일러스트, 캐릭터 등 이미지


"
만든 사람: b_lalla
Threads: @slowthirtys
Email: b_lalla@naver.com
"
