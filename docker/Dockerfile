FROM ubuntu:16.04

RUN apt-get update
RUN apt-get -y upgrade

RUN apt-get -y install curl sudo

# Setup node ppa
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

# Install packages
RUN apt-get -y install postgresql postgresql-contrib
RUN apt-get -y install nodejs

# Add init database script
COPY src/server/dbscripts/init.sql /init.sql

# Start the postgresql service and
# create database and
# run init.sql script and
# set password for postgres user
RUN service postgresql start && \
    sudo -u postgres psql -c "CREATE DATABASE CCTABET;" && \
    sudo -u postgres psql -d cctabet -f /init.sql && \
    sudo -u postgres psql -c "ALTER USER postgres WITH ENCRYPTED PASSWORD 'admin';"

# Add our postgres config file
COPY docker/pg_hba.conf /etc/postgres/9.5/main/

# Tell docker to run script on startup
CMD ./app/docker/docker_runtime.sh
