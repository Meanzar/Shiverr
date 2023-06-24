# Utilisez une image de base contenant Node.js
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 4000

# Commande pour démarrer l'application
CMD [ "node", "server.js" ]