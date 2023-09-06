# Alpine Linuxベースの最新バージョンnodeを採用
FROM node:18-alpine
# コンテナ内の作業ディレクトリ
WORKDIR /app

ENV LANG=C.UTF-8 \
 TZ=Asia/Tokyo

# ↓↓↓ここはまだコメントアウト(後ほど使用)↓↓↓
COPY package.json ./

# 3000番でコンテナを公開
EXPOSE 3000

CMD ["npm", "run", "dev"]