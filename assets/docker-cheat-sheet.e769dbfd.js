import{u as o,o as c,c as p,w as r,_ as i,a as s,b as n}from"./index.5a847f95.js";const t="/blog/assets/docker1.f8b4e132.png",y=s("div",{class:"prose m-auto"},[s("p",null,"[toc]"),s("h1",{id:"\u5B89\u88C5",tabindex:"-1"},[n("\u5B89\u88C5 "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#")]),s("p",null,[n("\u53EA\u5EFA\u8BAE\u4F7F\u7528\u4E0B\u5217\u5B89\u88C5\u65B9\u6CD5, \u5728"),s("strong",null,"docker docs"),n(" \u4E2D\u4E5F\u80FD\u627E\u5230\u5176\u4ED6 Linux \u53D1\u884C\u7248\u7684\u6559\u7A0B.")]),s("p",null,[s("a",{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener"},"Install Docker Engine on Ubuntu")]),s("p",null,[s("a",{href:"https://docs.docker.com/engine/install/linux-postinstall/",target:"_blank",rel:"noopener"},"Post-installation steps for Linux")]),s("h1",{id:"docker-\u4E3A\u4F55\u7269",tabindex:"-1"},[n("Docker \u4E3A\u4F55\u7269? "),s("a",{class:"header-anchor",href:"#docker-\u4E3A\u4F55\u7269","aria-hidden":"true"},"#")]),s("p",null,[n("\u7B80\u800C\u8A00\u4E4B, "),s("strong",null,"Docker \u5BB9\u5668"),n(" \u7B97\u662F\u865A\u62DF\u673A.")]),s("p",null,[n("\u5982\u679C\u628A\u4F60\u7684\u7535\u8111\u6BD4\u4F5C\u4E00\u7247"),s("strong",null,"\u6C34\u6CE5\u5730,"),n(" \u90A3\u4E48\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u5C31\u662F\u5728\u8FD9\u7247\u6C34\u6CE5\u5730\u4E0A"),s("strong",null,"\u91CD\u65B0\u6253\u5730\u57FA\u5E76\u76D6\u623F\u5B50"),n(", \u800C Docker\u5BB9\u5668 \u5C31\u662F\u4EE5\u8FD9\u7247\u6C34\u6CE5\u5730\u4E3A\u57FA\u7840\u52A0\u4E0A\u51E0\u5757\u9694\u677F\u6240\u7EC4\u6210\u7684"),s("strong",null,"\u65B9\u8231\u533B\u9662"),n(". \u865A\u62DF\u4E86, \u4F46\u662F\u4E0D\u591A! :dog2:")]),s("p",null,[n("\u90A3\u4E48, Docker\u5BB9\u5668 \u662F\u4E00\u53F0\u600E\u6837\u7684\u865A\u62DF\u673A\u5462? \u8981\u60F3\u641E\u61C2\u8FD9\u4E2A\u95EE\u9898, \u6211\u4EEC\u9700\u8981\u641E\u61C2 "),s("strong",null,"pivot_root"),n(" \\ "),s("strong",null,"cgroup"),n(" \\ "),s("strong",null,"namespace"),n("!")]),s("h2",{id:"pivot-root",tabindex:"-1"},[n("pivot_root "),s("a",{class:"header-anchor",href:"#pivot-root","aria-hidden":"true"},"#")]),s("p",null,"\u6539\u53D8\u8FDB\u7A0B\u7684\u6839\u76EE\u5F55."),s("p",null,"\u6BD4 chroot \u66F4\u52A0\u5B89\u5168, \u56E0\u4E3A chroot \u5B58\u5728\u8BBF\u95EE\u539F\u6765\u6839\u76EE\u5F55\u7684\u53EF\u80FD."),s("p",null,[n("Linux \u4E0B, \u901A\u8FC7:"),s("code",null,"man 2 pivot_root"),n(" \u67E5\u770B"),s("strong",null,"\u7CFB\u7EDF\u8C03\u7528 PIVOT_ROOT"),n(" \u7684\u76F8\u5173\u4FE1\u606F.")]),s("h2",{id:"cgroups",tabindex:"-1"},[n("cgroups "),s("a",{class:"header-anchor",href:"#cgroups","aria-hidden":"true"},"#")]),s("p",null,"\u540C\u4E00\u4E2A\u5BB9\u5668\u7684\u6240\u6709\u8FDB\u7A0B\u90FD\u4F4D\u4E8E\u540C\u4E00\u4E2A cgroups \u4E0B, \u9650\u5236\u8FDB\u7A0B\u5BF9 CPU\u8D44\u6E90\u4E0E\u5185\u5B58\u8D44\u6E90\u7684\u4F7F\u7528."),s("h2",{id:"namespace",tabindex:"-1"},[n("namespace "),s("a",{class:"header-anchor",href:"#namespace","aria-hidden":"true"},"#")]),s("p",null,[n("\u53C2\u8003 "),s("a",{href:"https://docs.docker.com/get-started/overview/#the-underlying-technology",target:"_blank",rel:"noopener"},"docker docs"),n(":")]),s("blockquote",null,[s("p",null,[n("Docker uses a technology called "),s("code",null,"namespaces"),n(" to provide the isolated workspace called the "),s("em",null,"container"),n(". When you run a container, Docker creates a set of "),s("em",null,"namespaces"),n(" for that container.")]),s("p",null,"These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.")]),s("p",null,"Linux \u7684 namespace \u5B9E\u73B0\u4E86\u4E0B\u56FE\u6240\u793A\u7684\u8D44\u6E90\u9694\u79BB, \u57FA\u672C\u6EE1\u8DB3 Docker \u5BB9\u5668\u8D44\u6E90\u9694\u79BB\u65B9\u9762\u7684\u9700\u6C42:"),s("p",null,[s("img",{src:t,alt:""})]),s("p",null,"\u5BB9\u5668\u4E2D\u8FD0\u884C\u7684\u8FDB\u7A0B\u5728\u5916\u90E8\u4E5F\u53EF\u4EE5\u770B\u5230. \u65B9\u6CD5\u5982\u4E0B:"),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker inspect "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}},"container_hash"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," grep Pid")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," ps aux "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," grep "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}},"pid"),s("span",{style:{color:"#CB7676"}},">")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker inspect "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}},"container_hash"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," grep Pid")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," ps aux "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," grep "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}},"pid"),s("span",{style:{color:"#AB5959"}},">")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"\u83B7\u53D6\u5185\u90E8\u8FDB\u7A0B\u5BF9\u5E94\u7684\u5916\u90E8 pid \u540E, \u53EF\u4EE5:"),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"sudo "),s("span",{style:{color:"#E0A569"}},"cd"),s("span",{style:{color:"#DBD7CA"}}," /proc/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}},"pid"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#DBD7CA"}},"/ns")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"ls -l")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"sudo "),s("span",{style:{color:"#B58451"}},"cd"),s("span",{style:{color:"#393A34"}}," /proc/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}},"pid"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#393A34"}},"/ns")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"ls -l")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"\u4F1A\u5217\u51FA\u4E00\u5806\u6307\u5411\u771F\u5B9E namespace \u6587\u4EF6\u7684\u8F6F\u94FE\u63A5."),s("p",null,[n("\u901A\u8FC7\u8FD9\u4E9B namespace \u6587\u4EF6, \u6211\u4EEC\u53EF\u4EE5\u91CD\u65B0\u8FDB\u5165\u8FDB\u7A0B, \u8FD9\u4E5F\u662F "),s("code",null,"docker exec"),n(" \u547D\u4EE4\u7684\u5B9E\u73B0\u539F\u7406.")]),s("p",null,[n("\u6240\u4EE5, \u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3: "),s("strong",null,"\u4E00\u4E2A Docker \u5BB9\u5668\u5C31\u662F\u4E00\u7EC4\u88AB\u9650\u5236\u4F4F\u7684\u8FDB\u7A0B"),n(".")]),s("h2",{id:"union-fs",tabindex:"-1"},[n("Union FS "),s("a",{class:"header-anchor",href:"#union-fs","aria-hidden":"true"},"#")]),s("h1",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[n("\u57FA\u672C\u4F7F\u7528 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")]),s("h2",{id:"\u67E5\u8BE2\u4FE1\u606F",tabindex:"-1"},[n("\u67E5\u8BE2\u4FE1\u606F "),s("a",{class:"header-anchor",href:"#\u67E5\u8BE2\u4FE1\u606F","aria-hidden":"true"},"#")]),s("p",null,"docker:"),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker version")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker info")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker inspect xxx "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," grep IPAddress")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker images")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker ps "),s("span",{style:{color:"#758575"}},"# -a")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker logs xxx")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker version")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker info")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker inspect xxx "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," grep IPAddress")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker images")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker ps "),s("span",{style:{color:"#A0ADA0"}},"# -a")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker logs xxx")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"Linux:"),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"cat /etc/os-release")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"uname -a")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"neofetch "),s("span",{style:{color:"#758575"}},"# install first")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"cat /etc/os-release")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"uname -a")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"neofetch "),s("span",{style:{color:"#A0ADA0"}},"# install first")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"\u955C\u50CF\u4E0E\u5BB9\u5668",tabindex:"-1"},[n("\u955C\u50CF\u4E0E\u5BB9\u5668 "),s("a",{class:"header-anchor",href:"#\u955C\u50CF\u4E0E\u5BB9\u5668","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run hello-world")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -h my_host_name busybox hostname "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"echo"),s("span",{style:{color:"#DBD7CA"}}," Hello, World"),s("span",{style:{color:"#CB7676"}},"!")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -it -v "),s("span",{style:{color:"#C98A7D"}},"`pwd`"),s("span",{style:{color:"#DBD7CA"}},":/tmp:ro ubuntu bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -d --rm --name my_web_server redis:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull ubuntu:jammy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull nginx:1.21-alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker rm xxx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker rmi xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker stop xxx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker start xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker "),s("span",{style:{color:"#E0A569"}},"exec"),s("span",{style:{color:"#DBD7CA"}}," -it xxx sh")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run hello-world")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -h my_host_name busybox hostname "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"echo"),s("span",{style:{color:"#393A34"}}," Hello, World"),s("span",{style:{color:"#AB5959"}},"!")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -it -v "),s("span",{style:{color:"#B56959"}},"`pwd`"),s("span",{style:{color:"#393A34"}},":/tmp:ro ubuntu bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -d --rm --name my_web_server redis:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull ubuntu:jammy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull nginx:1.21-alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker rm xxx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker rmi xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker stop xxx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker start xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker "),s("span",{style:{color:"#B58451"}},"exec"),s("span",{style:{color:"#393A34"}}," -it xxx sh")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"\u7F51\u7EDC\u4E0E\u6784\u5EFA\u4E0A\u4E0B\u6587",tabindex:"-1"},[n("\u7F51\u7EDC\u4E0E\u6784\u5EFA\u4E0A\u4E0B\u6587 "),s("a",{class:"header-anchor",href:"#\u7F51\u7EDC\u4E0E\u6784\u5EFA\u4E0A\u4E0B\u6587","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"# none")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run --net=none alpine ip addr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"# host")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run --net=host alpine ip addr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"# bridge")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run --net=bridge -p 80:80 alpine ip addr")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker cp tmp.txt xxx:/tmp")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# none")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run --net=none alpine ip addr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# host")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run --net=host alpine ip addr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# bridge")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run --net=bridge -p 80:80 alpine ip addr")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker cp tmp.txt xxx:/tmp")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"dockerhub",tabindex:"-1"},[n("DockerHub "),s("a",{class:"header-anchor",href:"#dockerhub","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker login -u xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker tag nginx:alpine huchase/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker push huchase/nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker save nginx:alpine -o xxx.tar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker load -i xxx.tar")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker search archlinux")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker login -u xxx")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker tag nginx:alpine huchase/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker push huchase/nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker save nginx:alpine -o xxx.tar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker load -i xxx.tar")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker search archlinux")]),n(`
`),s("span",{class:"line"})])])])])]),s("h1",{id:"\u6784\u5EFA\u955C\u50CF",tabindex:"-1"},[n("\u6784\u5EFA\u955C\u50CF "),s("a",{class:"header-anchor",href:"#\u6784\u5EFA\u955C\u50CF","aria-hidden":"true"},"#")]),s("h1",{id:"\u5BB9\u5668\u7F16\u6392",tabindex:"-1"},[n("\u5BB9\u5668\u7F16\u6392 "),s("a",{class:"header-anchor",href:"#\u5BB9\u5668\u7F16\u6392","aria-hidden":"true"},"#")]),s("p",null,"\u5BB9\u5668\u7F16\u6392\u662F\u4E2A\u597D\u4E1C\u897F, \u4F46\u662F k8s \u592A\u91CD\u4E86. \u5982\u679C\u4E0D\u641E\u4E91\u539F\u751F, \u4E5F\u5B9E\u5728\u6CA1\u5FC5\u8981\u5B66\u4E60 k8s."),s("p",null,"\u5BF9\u4E8E\u6211\u8FD9\u79CD\u53EA\u662F\u60F3\u901A\u8FC7 Docker \u65B9\u4FBF\u90E8\u7F72\u7684\u666E\u901A\u5F00\u53D1\u8005, docker-compose \u662F\u4E2A\u597D\u4E1C\u897F."),s("h1",{id:"\u6570\u636E\u5377",tabindex:"-1"},[n("\u6570\u636E\u5377 "),s("a",{class:"header-anchor",href:"#\u6570\u636E\u5377","aria-hidden":"true"},"#")]),s("h1",{id:"\u8D44\u6E90\u914D\u989D\u9650\u5236",tabindex:"-1"},[n("\u8D44\u6E90\u914D\u989D\u9650\u5236 "),s("a",{class:"header-anchor",href:"#\u8D44\u6E90\u914D\u989D\u9650\u5236","aria-hidden":"true"},"#")]),s("h1",{id:"docker-\u5B9E\u6218\u5B9E\u4F8B",tabindex:"-1"},[n("Docker \u5B9E\u6218\u5B9E\u4F8B "),s("a",{class:"header-anchor",href:"#docker-\u5B9E\u6218\u5B9E\u4F8B","aria-hidden":"true"},"#")]),s("h2",{id:"\u4F7F\u7528\u5BB9\u5668\u8FD0\u884C\u672C\u5730-python-\u6587\u4EF6",tabindex:"-1"},[n("\u4F7F\u7528\u5BB9\u5668\u8FD0\u884C\u672C\u5730 Python \u6587\u4EF6 "),s("a",{class:"header-anchor",href:"#\u4F7F\u7528\u5BB9\u5668\u8FD0\u884C\u672C\u5730-python-\u6587\u4EF6","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run --rm -v "),s("span",{style:{color:"#C98A7D"}},"`pwd`"),s("span",{style:{color:"#DBD7CA"}},":/tmp:ro python:alpine python /tmp/demo.py")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run --rm -v "),s("span",{style:{color:"#B56959"}},"`pwd`"),s("span",{style:{color:"#393A34"}},":/tmp:ro python:alpine python /tmp/demo.py")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"\u5B9E\u73B0\u4E00\u4E2A\u672C\u5730\u7684-dockerhub",tabindex:"-1"},[n("\u5B9E\u73B0\u4E00\u4E2A\u672C\u5730\u7684 DockerHub "),s("a",{class:"header-anchor",href:"#\u5B9E\u73B0\u4E00\u4E2A\u672C\u5730\u7684-dockerhub","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -d -p 5000:5000 registry")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker tag nginx:alpine 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker push 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker rmi  127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"curl 127.1:5000/v2/_catalog")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"curl 127.1:5000/v2/nginx/tags/list")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -d -p 5000:5000 registry")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker tag nginx:alpine 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker push 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker rmi  127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull 127.0.0.1:5000/nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl 127.1:5000/v2/_catalog")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl 127.1:5000/v2/nginx/tags/list")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"\u642D\u5EFA-wordpress-\u535A\u5BA2",tabindex:"-1"},[n("\u642D\u5EFA WordPress \u535A\u5BA2 "),s("a",{class:"header-anchor",href:"#\u642D\u5EFA-wordpress-\u535A\u5BA2","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull wordpress:5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull mariadb:10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker pull nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env MARIADB_DATABASE=db \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env MARIADB_USER=wp \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env MARIADB_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env MARIADB_ROOT_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    mariadb:10")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"# docker exec -it 9ac mysql -u wp -p")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env WORDPRESS_DB_HOST=172.17.0.2 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env WORDPRESS_DB_USER=wp \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env WORDPRESS_DB_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    --env WORDPRESS_DB_NAME=db \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    wordpress:5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    -p 80:80 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    -v "),s("span",{style:{color:"#C98A7D"}},"`pwd`"),s("span",{style:{color:"#DBD7CA"}},"/wp.conf:/etc/nginx/conf.d/default.conf \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    nginx:alpine ")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull wordpress:5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull mariadb:10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker pull nginx:alpine")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env MARIADB_DATABASE=db \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env MARIADB_USER=wp \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env MARIADB_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env MARIADB_ROOT_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    mariadb:10")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# docker exec -it 9ac mysql -u wp -p")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env WORDPRESS_DB_HOST=172.17.0.2 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env WORDPRESS_DB_USER=wp \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env WORDPRESS_DB_PASSWORD=123 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    --env WORDPRESS_DB_NAME=db \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    wordpress:5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker run -d --rm \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    -p 80:80 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    -v "),s("span",{style:{color:"#B56959"}},"`pwd`"),s("span",{style:{color:"#393A34"}},"/wp.conf:/etc/nginx/conf.d/default.conf \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    nginx:alpine ")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"wp.conf:"),s("pre",null,[s("code",{class:"language-nginx"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"server"),s("span",{style:{color:"#DBD7CA"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}}," listen "),s("span",{style:{color:"#DBD7CA"}},"80"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}}," default_type "),s("span",{style:{color:"#DBD7CA"}},"text/html"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"location"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"/ "),s("span",{style:{color:"#DBD7CA"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_http_version "),s("span",{style:{color:"#DBD7CA"}},"1.1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_set_header "),s("span",{style:{color:"#DBD7CA"}},"Host "),s("span",{style:{color:"#858585"}},"$"),s("span",{style:{color:"#B8A965"}},"host"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_pass "),s("span",{style:{color:"#DBD7CA"}},"http://172.17.0.3"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"server"),s("span",{style:{color:"#393A34"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}}," listen "),s("span",{style:{color:"#393A34"}},"80"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}}," default_type "),s("span",{style:{color:"#393A34"}},"text/html"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"location"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"/ "),s("span",{style:{color:"#393A34"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_http_version "),s("span",{style:{color:"#393A34"}},"1.1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_set_header "),s("span",{style:{color:"#393A34"}},"Host "),s("span",{style:{color:"#8E8F8B"}},"$"),s("span",{style:{color:"#8C862B"}},"host"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_pass "),s("span",{style:{color:"#393A34"}},"http://172.17.0.3"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("h2",{id:"\u4F7F\u7528-docker-compose-\u642D\u5EFA-wordpress-\u535A\u5BA2",tabindex:"-1"},[n("\u4F7F\u7528 docker-compose \u642D\u5EFA WordPress \u535A\u5BA2 "),s("a",{class:"header-anchor",href:"#\u4F7F\u7528-docker-compose-\u642D\u5EFA-wordpress-\u535A\u5BA2","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"sudo apt install -y docker-compose-plugin")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker compose version")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker compose -f xx.yml ps "),s("span",{style:{color:"#758575"}},"# careful")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker-compose -f wp-compose.yml "),s("span",{style:{color:"#E0A569"}},"exec"),s("span",{style:{color:"#DBD7CA"}}," -it nginx sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker compose -f xx.yml up -d")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"docker compose -f xx.yml down")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"sudo apt install -y docker-compose-plugin")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker compose version")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker compose -f xx.yml ps "),s("span",{style:{color:"#A0ADA0"}},"# careful")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker-compose -f wp-compose.yml "),s("span",{style:{color:"#B58451"}},"exec"),s("span",{style:{color:"#393A34"}}," -it nginx sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker compose -f xx.yml up -d")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"docker compose -f xx.yml down")]),n(`
`),s("span",{class:"line"})])])])])]),s("pre",null,[s("code",{class:"language-bash"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"services:")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  mariadb:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    image: mariadb:10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    container_name: mariadb")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    restart: always")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    environment:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      MARIADB_DATABASE: db")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      MARIADB_USER: wp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      MARIADB_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      MARIADB_ROOT_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  wordpress:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    image: wordpress:5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    container_name: wordpress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    restart: always")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    environment:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      WORDPRESS_DB_HOST: mariadb  "),s("span",{style:{color:"#758575"}},"#\u6CE8\u610F\u8FD9\u91CC\uFF0C\u6570\u636E\u5E93\u7684\u7F51\u7EDC\u6807\u8BC6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      WORDPRESS_DB_USER: wp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      WORDPRESS_DB_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      WORDPRESS_DB_NAME: db")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    depends_on:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      - mariadb")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  nginx:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    image: nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    container_name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    hostname: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    restart: always")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      - 80:80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    volumes:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      - ./wp.conf:/etc/nginx/conf.d/default.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    depends_on:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      - wordpress")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"services:")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  mariadb:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    image: mariadb:10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    container_name: mariadb")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    restart: always")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    environment:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      MARIADB_DATABASE: db")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      MARIADB_USER: wp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      MARIADB_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      MARIADB_ROOT_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  wordpress:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    image: wordpress:5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    container_name: wordpress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    restart: always")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    environment:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      WORDPRESS_DB_HOST: mariadb  "),s("span",{style:{color:"#A0ADA0"}},"#\u6CE8\u610F\u8FD9\u91CC\uFF0C\u6570\u636E\u5E93\u7684\u7F51\u7EDC\u6807\u8BC6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      WORDPRESS_DB_USER: wp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      WORDPRESS_DB_PASSWORD: 123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      WORDPRESS_DB_NAME: db")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    depends_on:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      - mariadb")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  nginx:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    image: nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    container_name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    hostname: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    restart: always")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      - 80:80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    volumes:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      - ./wp.conf:/etc/nginx/conf.d/default.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    depends_on:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      - wordpress")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"wp.conf:"),s("pre",null,[s("code",{class:"language-nginx"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"server"),s("span",{style:{color:"#DBD7CA"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}}," listen "),s("span",{style:{color:"#DBD7CA"}},"80"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}}," default_type "),s("span",{style:{color:"#DBD7CA"}},"text/html"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"location"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"/ "),s("span",{style:{color:"#DBD7CA"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_http_version "),s("span",{style:{color:"#DBD7CA"}},"1.1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_set_header "),s("span",{style:{color:"#DBD7CA"}},"Host "),s("span",{style:{color:"#858585"}},"$"),s("span",{style:{color:"#B8A965"}},"host"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#4D9375"}}," proxy_pass "),s("span",{style:{color:"#DBD7CA"}},"http://wordpress"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"#\u6CE8\u610F\u8FD9\u91CC\uFF0C\u7F51\u7AD9\u7684\u7F51\u7EDC\u6807\u8BC6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"server"),s("span",{style:{color:"#393A34"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}}," listen "),s("span",{style:{color:"#393A34"}},"80"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}}," default_type "),s("span",{style:{color:"#393A34"}},"text/html"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"location"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"/ "),s("span",{style:{color:"#393A34"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_http_version "),s("span",{style:{color:"#393A34"}},"1.1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_set_header "),s("span",{style:{color:"#393A34"}},"Host "),s("span",{style:{color:"#8E8F8B"}},"$"),s("span",{style:{color:"#8C862B"}},"host"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#1C6B48"}}," proxy_pass "),s("span",{style:{color:"#393A34"}},"http://wordpress"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"#\u6CE8\u610F\u8FD9\u91CC\uFF0C\u7F51\u7AD9\u7684\u7F51\u7EDC\u6807\u8BC6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("h1",{id:"\u5199\u5728\u540E\u9762",tabindex:"-1"},[n("\u5199\u5728\u540E\u9762 "),s("a",{class:"header-anchor",href:"#\u5199\u5728\u540E\u9762","aria-hidden":"true"},"#")]),s("p",null,"\u672C\u6587\u5E76\u672A\u5199\u5B8C\u6574, \u7528\u5230\u4E86\u518D\u586B\u5751.")],-1),B="\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5",u="2022-10-16 21:40",C="zh",g="10min",x=[{property:"og:title",content:"\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5"}],f={__name:"docker-cheat-sheet",setup(d,{expose:a}){const l={title:"\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5",date:"2022-10-16 21:40",lang:"zh",duration:"10min",meta:[{property:"og:title",content:"\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5"}]};return a({frontmatter:l}),o({title:"\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5",meta:[{property:"og:title",content:"\u591F\u7528\u5C31\u597D, Docker \u77E5\u8BC6\u901F\u67E5"}]}),(D,h)=>{const e=i;return c(),p(e,{frontmatter:l},{default:r(()=>[y]),_:1})}}};export{u as date,f as default,g as duration,C as lang,x as meta,B as title};
