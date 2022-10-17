---
title: 够用就好, Docker 知识速查
date: 2022-10-16 21:40
lang: zh
duration: 10min 
---



[toc]

# 安装

只建议使用下列安装方法, 在**docker docs** 中也能找到其他 Linux 发行版的教程.

[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

[Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)



# Docker 为何物?

简而言之, **Docker 容器** 算是虚拟机.



如果把你的电脑比作一片**水泥地,** 那么传统的虚拟机就是在这片水泥地上**重新打地基并盖房子**, 而 Docker容器 就是以这片水泥地为基础加上几块隔板所组成的**方舱医院**. 虚拟了, 但是不多! :dog2:



那么, Docker容器 是一台怎样的虚拟机呢? 要想搞懂这个问题, 我们需要搞懂 **pivot_root** \ **cgroup** \ **namespace**!



## pivot_root

改变进程的根目录.

比 chroot 更加安全, 因为 chroot 存在访问原来根目录的可能.



Linux 下, 通过:`man 2 pivot_root`  查看**系统调用 PIVOT_ROOT** 的相关信息.





## cgroups



同一个容器的所有进程都位于同一个 cgroups 下, 限制进程对 CPU资源与内存资源的使用.



## namespace

参考 [docker docs](https://docs.docker.com/get-started/overview/#the-underlying-technology):

>Docker uses a technology called `namespaces` to provide the isolated workspace called the *container*. When you run a container, Docker creates a set of *namespaces* for that container.
>
>These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.



Linux 的 namespace 实现了下图所示的资源隔离, 基本满足 Docker 容器资源隔离方面的需求:

![](/public/imgs/docker1.png)



容器中运行的进程在外部也可以看到. 方法如下:

```bash
docker inspect <container_hash> | grep Pid
 ps aux | grep <pid>
```



获取内部进程对应的外部 pid 后, 可以:

```bash
sudo cd /proc/<pid>/ns

ls -l
```

会列出一堆指向真实 namespace 文件的软链接.



通过这些 namespace 文件, 我们可以重新进入进程, 这也是 `docker exec` 命令的实现原理.



所以, 我们可以这么理解: **一个 Docker 容器就是一组被限制住的进程**.

## Union FS



# 基本使用



## 查询信息

docker:

```bash
docker version

docker info

docker inspect xxx | grep IPAddress

docker images

docker ps # -a

docker logs xxx
```

Linux:

```bash
cat /etc/os-release

uname -a

neofetch # install first
```





## 镜像与容器

```bash
docker run hello-world
docker run -h my_host_name busybox hostname && echo Hello, World!

docker run -it -v `pwd`:/tmp:ro ubuntu bash
docker run -d --rm --name my_web_server redis:alpine

docker pull ubuntu:jammy
docker pull nginx:1.21-alpine

docker rm xxx
docker rmi xxx

docker stop xxx
docker start xxx

docker exec -it xxx sh
```



## 网络与构建上下文

```bash
# none
docker run --net=none alpine ip addr
# host
docker run --net=host alpine ip addr
# bridge
docker run --net=bridge -p 80:80 alpine ip addr

docker cp tmp.txt xxx:/tmp
```





## DockerHub

```bash
docker login -u xxx

docker tag nginx:alpine huchase/nginx:alpine
docker push huchase/nginx:alpine

docker save nginx:alpine -o xxx.tar
docker load -i xxx.tar

docker search archlinux
```



# 构建镜像



# 容器编排

容器编排是个好东西, 但是 k8s 太重了. 如果不搞云原生, 也实在没必要学习 k8s. 



对于我这种只是想通过 Docker 方便部署的普通开发者, docker-compose 是个好东西.

# 数据卷

# 资源配额限制

# Docker 实战实例



## 使用容器运行本地 Python 文件

```bash
docker run --rm -v `pwd`:/tmp:ro python:alpine python /tmp/demo.py
```





## 实现一个本地的 DockerHub

```bash
docker pull registry
docker run -d -p 5000:5000 registry

docker tag nginx:alpine 127.0.0.1:5000/nginx:alpine
docker push 127.0.0.1:5000/nginx:alpine
docker rmi  127.0.0.1:5000/nginx:alpine
docker pull 127.0.0.1:5000/nginx:alpine

curl 127.1:5000/v2/_catalog
curl 127.1:5000/v2/nginx/tags/list
```



## 搭建 WordPress 博客

```bash

docker pull wordpress:5
docker pull mariadb:10
docker pull nginx:alpine

docker run -d --rm \
    --env MARIADB_DATABASE=db \
    --env MARIADB_USER=wp \
    --env MARIADB_PASSWORD=123 \
    --env MARIADB_ROOT_PASSWORD=123 \
    mariadb:10

# docker exec -it 9ac mysql -u wp -p

docker run -d --rm \
    --env WORDPRESS_DB_HOST=172.17.0.2 \
    --env WORDPRESS_DB_USER=wp \
    --env WORDPRESS_DB_PASSWORD=123 \
    --env WORDPRESS_DB_NAME=db \
    wordpress:5

docker run -d --rm \
    -p 80:80 \
    -v `pwd`/wp.conf:/etc/nginx/conf.d/default.conf \
    nginx:alpine 
```



wp.conf:

```nginx
server {
  listen 80;
  default_type text/html;

  location / {
      proxy_http_version 1.1;
      proxy_set_header Host $host;
      proxy_pass http://172.17.0.3;
  }
}
```



## 使用 docker-compose 搭建 WordPress 博客

```bash
sudo apt install -y docker-compose-plugin

docker compose version

docker compose -f xx.yml ps # careful
docker-compose -f wp-compose.yml exec -it nginx sh
docker compose -f xx.yml up -d
docker compose -f xx.yml down
```



```bash

services:

  mariadb:
    image: mariadb:10
    container_name: mariadb
    restart: always

    environment:
      MARIADB_DATABASE: db
      MARIADB_USER: wp
      MARIADB_PASSWORD: 123
      MARIADB_ROOT_PASSWORD: 123
      
  
  wordpress:
    image: wordpress:5
    container_name: wordpress
    restart: always

    environment:
      WORDPRESS_DB_HOST: mariadb  #注意这里，数据库的网络标识
      WORDPRESS_DB_USER: wp
      WORDPRESS_DB_PASSWORD: 123
      WORDPRESS_DB_NAME: db

    depends_on:
      - mariadb
 
  
  nginx:
    image: nginx:alpine
    container_name: nginx
    hostname: nginx
    restart: always
    ports:
      - 80:80
    volumes:
      - ./wp.conf:/etc/nginx/conf.d/default.conf

    depends_on:
      - wordpress
```



wp.conf:

```nginx
server {
  listen 80;
  default_type text/html;

  location / {
      proxy_http_version 1.1;
      proxy_set_header Host $host;
      proxy_pass http://wordpress;  #注意这里，网站的网络标识
  }
}
```







# 写在后面

本文并未写完整, 用到了再填坑.

