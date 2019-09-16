FROM node:9.7.1-alpine
COPY . /src
WORKDIR /src
RUN npm install --unsafe-perm
ENTRYPOINT ["npm", "run", "test:ci"]