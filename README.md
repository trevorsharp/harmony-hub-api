# harmony-hub-api

A simple REST API for controlling devices via a Harmony Hub

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
      - "PORT=3000"
      - "USERNAME=myusername"
      - "PASSWORD=mypassword"
      - "HUB_IP_ADDRESS=192.168.1.2"
```
