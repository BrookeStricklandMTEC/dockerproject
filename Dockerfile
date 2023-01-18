FROM node:16.3.0

LABEL maintainer="Brooke Strickland"

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm","start"]