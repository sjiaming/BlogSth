---
layout: article
title: Web Crawling I
description: TBC
imgsrc: assets/pics/tools/spider.jpg
banner: assets/pics/tools/spider_banner.jpg
date: 2017-11-02
category: Tool
tags: [Python]
author: Song Jiaming
---

This article will list steps for web crawler using simple example.<br>
Basic Understanding of HTML is required


### 1. Obtain HTML information from URL
Packages needed: `urllib.request` and `requests`:
- `urllib.request` is pre-installed in python, no extra installation required
- `requests` has to be intsalled manually: `pip install requests`<br>
[More Information](http://docs.python-requests.org/en/master/)

Firstly, we need to use `requests.get(url)`, it will send a GET request to the web server of the url specified. For example:
```python
import requests

if __name__ == '__main__':
    target = 'https://sjiaming.github.io/BlogSomething/'
    req = requests.get(url=target)
    print(req.text)
```

The code above will return a result as below:
![get() result]({{site.baseurl}}/assets/pics/tools/get.png)

The left-hand side is the html shown in inspection while right-hand side is tthe html we obtained.