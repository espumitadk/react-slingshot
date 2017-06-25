#!/bin/bash

DOCKERFILE_DIRECTORY=~/IdeaProjects/react-slingshot/Front-end
docker stop front-cont
docker rm front-cont
docker rmi front-img
docker build -t front-img $DOCKERFILE_DIRECTORY
docker run --name front-cont -p 3000:3000 -d front-img