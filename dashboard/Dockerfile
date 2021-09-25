FROM node:latest

WORKDIR /dashboard

COPY package*.json /dashboard/
RUN npm install
COPY . /dashboard/

EXPOSE 3000

CMD ["npm", "start"]