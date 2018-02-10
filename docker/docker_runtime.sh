# The Docker container runs this on startup. See the Dockerfile

export NODE_ENV=development

# Start postgresql
echo "Starting postgresql"
service postgresql start
echo "Starting site"

# Start site
echo "Starting site"
cd /app/src/site
PORT=8000 npm start &

# Start server
echo "Starting server"
cd /app/src/server
npm start
