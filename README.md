# harmony-hub-api

A simple REST API for controlling devices via a Harmony Hub

## Setup Using Docker

Prerequisites:

- Ensure docker is set up and running on your machine (https://docs.docker.com/get-docker)

To run this application using Docker:

1. Create the `docker-compose.yml` file as described below
2. Run `docker-compose up -d` in the folder where your `docker-compose.yml` lives
3. Check the logs using `docker-compose logs -f` to see if there are any errors in your configuration
4. Go to `http://localhost:PORT/status` (where PORT is the port number configured in the `docker-compose.yml` file) to check that the API is up ad running

### docker-compose.yml

```
version: '3'
services:
  harmony-hub-api:
    image: trevorsharp/harmony-hub-api:latest
    container_name: harmony-hub-api
    restart: always
    ports:
      - 3000:3000
    enviroment:
      - "USERNAME=myusername"
      - "PASSWORD=mypassword"
      - "HUB_IP_ADDRESS=192.168.1.2"
```

Fill in a username and password which will be used for HTTP Basic Auth when sending POST requests to the API. Also, add in the IP address of the harmony hub that you would like to control.

## Endpoints

This API exposes a few endpoints:

#### GET /status

#### GET /devices

#### GET /devices/DEVICE_ID

#### GET /devices/DEVICE_ID/commands

#### POST /devices/DEVICE_ID/commands/COMMAND_NAME

This call requires the use of HTTP Basic Auth with the username and password configured in the `docker-compose.yml` file.
