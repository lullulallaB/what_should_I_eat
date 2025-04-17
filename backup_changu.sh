
#!/bin/bash

# 사용법 안내
if [ -z "$1" ]; then
  echo "❗ 사용법: bash backup_changu.sh 기능_이름"
  exit 1
fi

# 날짜 + 기능명 기반 백업 디렉토리 생성
DATE=$(date +%Y-%m-%d)
FEATURE=$1
BACKUP_DIR="backup/${DATE}_${FEATURE}"

echo "📦 백업 디렉토리 생성: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# index.html + js 파일들 복사
cp 02_publishing/index.html "$BACKUP_DIR/"
cp 02_publishing/js/*.js "$BACKUP_DIR/"

# backup/ 폴더의 흩어진 잔여 파일 정리
find backup -maxdepth 1 -type f -name "*.js" -exec rm {} +
find backup -maxdepth 1 -type f -name "index.html" -exec rm {} +

# .gitignore에 backup/ 등록 (중복 방지)
if ! grep -q "^backup/$" .gitignore 2>/dev/null; then
  echo "backup/" >> .gitignore
  echo "✅ .gitignore에 backup/ 추가 완료"
fi

echo "✅ 백업 완료! (${BACKUP_DIR})"
