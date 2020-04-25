# Node API MongoDB Deploy Kubernetes Example

### Dev

```
$ docker-compose up
```

### Production with docker-compose

```
# with docker-compose
$ docker-compose -f docker-compose.prod.yml
```

### Build Image

```
$ docker build -f ./docker/Dockerfile.prod -t ${USER_NAME}/node-api:${IMAGE_TAG}
$ docker push ${USER_NAME}/node-api:${IMAGE_TAG}
```

### Deploy To Kubernetes

```
$ cd deployment && helm upgrade --install node-api . --namespace ${KUBE_NAMESPACE} --wait --atomic --set image.tag=${IMAGE_TAG}
```
