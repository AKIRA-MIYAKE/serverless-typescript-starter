FROM node:4.3.2

RUN npm install npm@latest -g

WORKDIR /starter

ENV PATH $PATH:/starter/node_modules/.bin

CMD ["npm", "start"]
