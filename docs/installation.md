# Installation instructions

A guide on installation to start working on the site.

1. Clone the project repository into the directory of your choice:
```
git clone https://github.com/tyrvi/cctABET.git
```

2. Install [Docker](https://www.docker.com/community-edition).

3. Install [node.js](https://nodejs.org/en/download/). The LTS version we are using is v8.9.4.
4. Install `create-react-app` globally:

```
npm install -g create-react-app
```

Make sure that `create-react-app` is installed with:

```
create-react-app --version
```

5. Next go to the directory of the react app in the project: 
```
cd cctABET/src/site
```

6. Once in the directory run:
```
npm install
```

This will install all the library dependencies for the site portion (the HTTP server and frontend).

7. Next go to the server folder located at `cctABET/src/server`.
8. Once in the directory run:
```
npm install
```

This will install all the library dependencies for the server poriton (the REST API and backend).

9. Create the docker container with :
```
./create_docker.sh
```

This will take some time to run.

This script creates a new docker container. Docker will build the entire server locally including the database.

10. Once the Docker container is created, you can start the server with:
```
./run_docker.sh
```

11. To access the site portion, go to:
```
http://localhost:3000
```

12. To access the server portion for testing, go to:

```
http://localhost:3001
```
