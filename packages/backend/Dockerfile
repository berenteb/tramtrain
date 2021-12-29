FROM node:latest as base
ENV PORT=3001
ENV NODE_PATH=./dist
WORKDIR /backend
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build