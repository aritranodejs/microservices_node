# microservices_node

# Run Docker
docker-compose up --build

# Down Docker
docker-compose down

# **************************** For MongoDB ******************************
# Install mongodb
npm install mongodb

# Install mongoose
npm install mongoose

# Install migrate-mongo globally
npm install -g migrate-mongo

# Setup migrate-mongo
npx migrate-mongo init

# To create a table via migration:
migrate-mongo create users_table

# Apply the Migration
migrate-mongo up

# Revert the Migration (if needed)
migrate-mongo down