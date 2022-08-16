FROM --platform=amd64 node:alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src ./

RUN npm install

CMD ["node", "index.js"]
