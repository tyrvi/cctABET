## Docker
Sometimes when the database has a change, it breaks logging in. To reset the database then you must delete the volume and re-create the docker container using `./create_docker.sh`

To delete all the docker parts run:

```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker system prune
docker volume rm postgresql
```

Then you can run:

```
./create_docker.sh
```

You'll be able to reset the database.

Another way you can debug docker stuff is running `./run_docker.sh` like so:

```
./run_docker.sh --interactive
```

or 

```
./run_docker.sh -i
```

This will give you access to the server. Keep in mind that everything not in a volume will be reset once you kill the docker container.

## React

When making fetch requests be sure to add `credentials: 'same-origin'` or you will get a CORS error.

Example:

fetch('forms/create', {
    method: 'POST',
    credentials: 'same-origin',
    body: {
        ...
    }
});
