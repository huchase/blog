---
title: 优雅地开启 \ 关闭网络代理, 拒绝手动操作, 以 Ubuntu 为例
date: 2022-10-16 17:34
lang: zh
duration: 3min 
---

[toc]

# 问题

由于实在无法忍受 Windows11, 我彻底放弃了它. 我开始使用 Pop!_OS 22.04, 它基于 Ubuntu 22.04 LTS. 我使用的是 Gnome 桌面.



由于有科学上网的需求, 我不得不频繁地对 **系统设置 -> 网络 -> 网络代理** 进行设置, 一遍又一遍地鼠标点击十分烦人, 下面是解决方案.



# 解决方案

> 下列方法仅适用于 Gnome 桌面, 其他搭载 Gnome 桌面的 Linux 发行版(例如 openSUSE \ Fedora) 均可以使用.

> 建议你先看参考资料给出的教程再动手.



安装 **dconf-editor**:

```bash
sudo apt install -y dconf-editor
```



**gsettings** 可以在命令行中对系统设置进行设置, **dconf-editor** 则通过图形化的操作方法对系统设置进行设置.



1. 打开 dconf-editor , 以 proxy 为关键词可以搜索到网络代理对应的条目, 如下图:

​	![](/public/imgs/ub1.png)

2. 相关命令行:

   ```bash
   # list-keys
   gsettings list-keys org.gnome.system.proxy
   
   # get
   gsettings get org.gnome.system.proxy mode
   
   # set, 'none' \ 'manual' \ 'auto'
   gsettings set org.gnome.system.proxy mode 'none'
   ```

3. 在你的 shell 配置文件写入:

   ```bash
   ### Proxy
   
   proxy_on() {
     gsettings set org.gnome.system.proxy mode 'manual';
   }
   
   proxy_off() {
     gsettings set org.gnome.system.proxy mode 'none';
   }
   
   alias on="proxy_on"
   alias off="proxy_off"
   ```

 	然后, 你就摆脱点点点了...





# 参考资料

[gsettings简介及常用操作](https://www.cnblogs.com/awakenedy/articles/10868034.html)
