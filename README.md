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
    environment:
      - "USERNAME=myusername"
      - "PASSWORD=mypassword"
      - "HUB_IP_ADDRESS=192.168.1.2"
```

Fill in a username and password which will be used for HTTP Basic Auth when sending POST requests to the API. Also, add in the IP address of the harmony hub that you would like to control.

## Endpoints

This API exposes a few endpoints:

#### GET /status

- Returns `Connected to Harmony` when the API can comminucate with the Harmony Hub

#### GET /devices

- Returns a JSON list of objects for all devices that are set up on the Harmony Hub

#### GET /devices/_DEVICE_ID_

- Returns a JSON object with data for the device with id equal to `_DEVICE_ID_`

#### GET /devices/_DEVICE_ID_/commands

- Returns a JSON list of commands for the device with id equal to `_DEVICE_ID_`

#### POST /devices/_DEVICE_ID_/commands/_COMMAND_NAME_

- Returns a status code of 200 after successfully sending command with name `_COMMAND_NAME_` to device with id `_DEVICE_ID_` via Harmony Hub
- This call requires the use of HTTP Basic Auth with the username and password configured in the `docker-compose.yml` file (See [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) for more information on HTTP Basic Authorization)
