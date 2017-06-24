#!/bin/bash

DOCKERFILE_DIRECTORY=~/IdeaProjects/react-slingshot/Back-end
docker stop back-cont
docker rm back-cont
docker rmi back-img
docker build -t back-img $DOCKERFILE_DIRECTORY
docker run --name back-cont -p 80:4567 -d back-img