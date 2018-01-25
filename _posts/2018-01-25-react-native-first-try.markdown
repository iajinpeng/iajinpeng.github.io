---
layout: post
title: React Native开始
date: 2018-01-25
description: 对react native一无所知,打算从0开始学
tags: [JS, React, React Native]
---

最近公司要做一个混合APP,前端成员还没有确定采用什么技术.有人推荐使用hbuilder App,据说还不错.
hbuilder编辑器我倒是用过,但是对hbuilder App么--知之甚少.API Cloud之前倒是用过,只不过由于某些原因,那个项目最终夭折了.

那么现在说到H5混合APP,无非是hbuilder, API cloud, phoneGap以及React Native等.哪个最好用我们姑且不论,因为没有全部用过就没有发言权.但是要论"逼格"最高,当属React Native.
团队讨论突然蹦出的"React Native"这词,竟莫名的是我感到些许惊讶.因为这个名词在前端界很早就不算陌生了,但我突然发现自己对它可以说是一无所知.
我对React了解不少,想想闲着也是闲着,不妨开始研究研究React Native.所以本篇文章将要描述的是一个菜鸡的学习路

### 项目生成
找到facebook 的React Native github地址,根据引导完成,与create-react-app一样
<br>
首先下载create-react-native-app:
>npm install -g create-react-native-app

然后到自己的目录下运行:
>create-react-native-app AwesomeProject <br>
cd AwesomeProject <br>
npm start

start之后命令行中出现了一个硕大的二维码,长这样:

![]({{site.baseurl}}/assets/img/react-native-qr.png){:height="400px"}

### 预览
此时说明react-native-app项目创建并运行成功了.然后需要下载 [Expo](https://expo.io/learn){:target="_blank"} , 
到手机上的App store下载该应用即可,下载完成打开Expo扫描之前的二维码就可以预览我们的react-native-app了

![]({{site.baseurl}}/assets/img/react-app-screenshot.jpg){:height="400px"}

app.js代码

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
	      <Text>黄鹤一去不复返,白云千载空悠悠</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

