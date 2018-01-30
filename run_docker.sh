# Starts the docker container
# NOTE: Must run this command in the directory of the project for this to work

# Path to the server.
server_path=`pwd`

# Port bindings for the server
server_host_port='3001'
server_docker_port='3001'

# Port bindings for the site
site_host_port='3000'
site_docker_port='3000'

docker run \
--mount type=bind,source=$server_path,target=/app \
--mount source=postgresql,target=/var/lib/postgresql/9.5/main \
--publish=$server_host_port:$server_docker_port \
--publish=$site_host_port:$site_docker_port \
-it cctabet
