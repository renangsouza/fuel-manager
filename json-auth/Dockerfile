FROM ubuntu:latest

#WORKDIR /usr/app

RUN apt update
RUN apt install nodejs npm -y 

#CMD nodejs --version

WORKDIR /usr/app

RUN npm install -D json-server json-server-auth

RUN mkdir db

COPY db.json /usr/app/db/

CMD /usr/app/node_modules/.bin/json-server-auth db/db.json -p 8080 --host 0.0.0.0
 

