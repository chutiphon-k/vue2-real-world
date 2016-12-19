# Vue2 Real World Course

> A Vue.js project [Demo](https://twisser-5cc2d.firebaseapp.com)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Docker Setup

``` bash
# setup docker container
docker build -t twisser .

#start docker container
docker run -d -p 8080:80 twisser

#stop docker container
docker ps --all
docker stop [CONTAINER ID]

#remove docker container
docker ps --all
docker rm [CONTAINER ID]

#web interface
[http://localhost:8080](http://localhost:8080)
```

## Firebase Setup

``` bash
# install global dependencies
npm install -g firebase-tools

# initializing firebase
firebase init

# deploy firebase server
firebase deploy

#web interface
[https://twisser-5cc2d.firebaseapp.com](https://twisser-5cc2d.firebaseapp.com)
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
