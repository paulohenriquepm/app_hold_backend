FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

ENTRYPOINT ["sh", "./entrypoints/app-entrypoint.sh"]

EXPOSE 3333


