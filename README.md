# microservices_node

# Run Docker
docker-compose up --build

# Down Docker
docker-compose down

# Stop all containers and remove volumes
docker-compose down -v

# **************************** For MongoDB ******************************
# Install mongodb
npm install mongodb

# Install mongoose
npm install mongoose

# Install migrate-mongo globally
npm install -g migrate-mongo

# Setup migrate-mongo
npx migrate-mongo init

# If not mongo install globally
npx migrate-mongo create users_table

# To create a table via migration:
migrate-mongo create users_table

### Now we have to install migrate-mongo in Docker Container (It should be done in dockerfile of each service(Best Approach))###
docker exec -it service_name sh
# example :
docker exec -it microservices-node-user-service-1 sh

cd src
npm install migrate-mongo
npx migrate-mongo up

### Now we have to Run Migrations Inside Docker Container ###
docker exec -it service_name sh

# example :
docker exec -it microservices-node-user-service-1 sh
cd src
npx migrate-mongo up
exit

### Verify Database Changes ### 
docker exec -it db_name mongosh

# example :
docker exec -it user-db mongosh
# List Databases
show dbs
# select db
use user_service
# List Collections
show collections
