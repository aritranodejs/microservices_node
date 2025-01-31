FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

# Copy migration config to service container
COPY ../migrate-mongo-config.js . 

# Ensure migration runs during build (optional)
RUN npx migrate-mongo up || echo "No new migrations to apply"

CMD ["node", "src/index.js"]
