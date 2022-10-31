FROM node:16

WORKDIR /app

RUN apt-get update
RUN apt-get install -y curl

RUN npm ci

EXPOSE 9537

# Install local DB
CMD ["mkdir", "db"]
CMD ["curl", "https://s3.ap-northeast-2.amazonaws.com/6unu.net/doro-juso.db", ">", "db/doro-juso.db"]
