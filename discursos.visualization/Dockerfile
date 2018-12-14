FROM node:8.11.3-alpine

ADD . .

RUN ["npm", "install", "-g", "serve"]

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

CMD ["serve", "-s", "build" ]

