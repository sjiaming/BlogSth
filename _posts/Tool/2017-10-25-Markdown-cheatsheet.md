---
layout: article
title: Markdown Cheatsheet
description: Syntax in how to write markdown file for this blog.
imgsrc: assets/tools/markdown.jpg
banner: assets/tools/markdown_banner.png
date: 2017-10-29
category: Tool
tags: [Markdown,shortcut]
author: Song Jiaming
extensions: ['extra', 'toc']
---
This is a summary of useful syntax (supported by this blog) to write Markdown :smile:

### 1. Headers
`#`: h1 header, `##`: h2 header, ...,`#####`: h5 header, `######`: h6 header


### 2. Emphasis
- Italics: `*asterisk*` - *asterisk*, or `_underscore_` - _underscore_
- Bold: `**asterisks**` - **asterisks** or `__underscores__` - __underscores__
- Strikethrough: `~~tildes~~` - ~~tildes~~
- Highlight or Inline code: `` which highlight text like the aboves did.


### 3. Lists
#### Ordered list:
1. First item `1. `
2. Second item `2. `
3. Third item `3. `

#### Unordered lists:
* You can use asterisk `*`
* You can use minus `-` 
* You can use plus `+`

#### Sublists:
```
+ Normal lists with
    * `Tap` to create sublist
    - any combination works
```
+ Normal lists with
    * `Tap` to create sublist
    - any combination works


### 4. Links
- `You can even have links: [Google](http://www.google.com)`: [Google](http://www.google.com)
- or just normal link: http://www.google.com

### 5. Images
`![Markdown Logo](..\assets\tools\markdown.jpg)`<br>

or `![Markdown Logo](..\assets\tools\markdown.jpg){:height=100px}` to specify styles

![Markdown Logo](..\assets\tools\markdown.jpg)

### 6. Code and Syntax Highlighting

- Inline code (same as highlight):`var example = true`, use `
- This is a whole block code: Use ```
```
if (isAwesome){
  return true
}
```

- This is a whole block code with language specified:<br>
E.g. Use ```python 
```python
for i in range(10):
  print("hello world")
```

### 7. Tables
```
| Left      | Aligned   | Table |
| --------- |---------- | ----- |
| Apple     | Price     | $1600 |
| Pear      | Cost      |   $12 |
| Banana    | Profit    |    $1 |
```

| Left      | Aligned   | Table |
| :-------- |:--------- | :---- |
| Apple     | Price     | $1600 |
| Pear      | Cost      |   $12 |
| Banana    | Profit    |    $1 |

### 8. Blockquotes or indentation
```
> First indentation
>> Further indentation
```
> First indentation
>> Further indentation


### 9. Math Environment
Inline math: `\\(\frac{\pi}{2}\\)`,<br>
- This displays as \\(\frac{\pi}{2}\\)

Alternatively, math can be written on its own line:

```
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \, e^{ - i \omega t}dt$$

\\[\int_0^1 f(t) \mathrm{d}t\\]

\\[\sum_j \gamma_j^2/d_j\\]
```

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \, e^{ - i \omega t}dt$$

\\[\int_0^1 f(t) \mathrm{d}t\\]

\\[\sum_j \gamma_j^2/d_j\\]

### 10. Horizontal Rule
Three or more Hyphens `---` , Asterisks `***`, Underscores `___`

### 11. Task list:
```
1. [x] This is a complete item
2. [x] This is a complete item
3. [ ] this is a complete item
    - [ ] this is an incomplete item
    - [ ] this is an incomplete item
```

1. [x] This is a complete item
2. [x] This is a complete item
3. [ ] this is a complete item
    - [ ] this is an incomplete item
    - [ ] this is an incomplete item

### 12. Emoji
Emoji shows up when `:tada:` -> :tada: , `:+1:` -> :+1: , `:heart:` -> :heart: ,etc
