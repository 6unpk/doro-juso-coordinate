FROM node:16

WORKDIR /app

RUN apt-get update
RUN apt-get install -y curl
# Install local DB
RUN mkdir db
RUN curl https://s3.ap-northeast-2.amazonaws.com/6unu.net/doro-juso.db > db/doro-juso.db

COPY ./ ./

RUN npm install

EXPOSE 9537

ENTRYPOINT ["npm", "run", "start:prod"]
