docker build -f docker/Dockerfile -t cctabet . && \
docker volume create postgresql && \
docker volume create uploads
