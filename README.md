# harmony-hub-api

A simple REST API for controlling devices via a Harmony Hub

## Setup Using Docker

Prerequisites:

- Ensure Docker is set up and running on your machine (https://docs.docker.com/get-docker)
- Harmony Hub set up with at least one device and network accessible from the machine running Docker

To run this application using Docker:

1. Create the `docker-compose.yml` file as described below
2. Run `docker-compose up -d` in the folder where your `docker-compose.yml` lives
3. Check the logs using `docker-compose logs -f` to see if there are any errors in your configuration
4. Go to `http://localhost:3000/status` to check that the API is up and running

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

Fill in the IP address of your Harmony Hub, and add a username and password which will be required when sending commands to the Harmony Hub.

## Endpoints

#### GET /status

- Returns `Connected to Harmony` when the API can comminucate with the Harmony Hub

#### GET /devices

- Returns a JSON list of objects for all devices that are set up on the Harmony Hub

#### GET /devices/{deviceId}

- Returns a JSON object with data for the device with id equal to `{deviceId}`

#### GET /devices/{deviceId}/commands

- Returns a JSON list of commands for the device with id equal to `{deviceId}`

#### POST /devices/{deviceId}/commands/{commandName}

- Returns `OK` after successfully sending the command (`{commandName}`) to device with id `{deviceId}` via Harmony Hub
- Requires username and password via HTTP Basic Auth (See [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) for more information)
