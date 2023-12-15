#Scarica sistema operativo
FROM node:18.13.0-alpine

WORKDIR /app

EXPOSE 4200

#Copio tutte le dipendenze del progetto
COPY package*.json ./

#Installo i node_modules
RUN npm install

COPY . .

CMD ["npm", "start"]