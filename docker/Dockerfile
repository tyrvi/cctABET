FROM ubuntu:16.04

RUN apt-get update
RUN apt-get -y upgrade

RUN apt-get -y install curl

# Setup node ppa
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

# Install packages
RUN apt-get -y install postgresql postgresql-contrib
RUN apt-get -y install nodejs

# Tell docker to run script on startup
CMD ./app/docker/docker_runtime.sh
