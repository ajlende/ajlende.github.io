---
title: "Hello, World!"
description: "This post is mainly for testing the creation and styling of the blog post page of my website. What do you think? I think it's looking pretty slick so far!"
slug: "hello-world"
date: "2017-09-03T06:19:44Z"
tags: ["design", "styles"]
---

# Hello, World! 👋

This post is mainly for testing the creation and styling of the blog post page of my website.
What do you think? I think it's looking pretty slick so far. 😜

---

# This is a \<h1\>
## This is a \<h2\>
### This is a \<h3\>
#### This is a \<h4\>
##### This is a \<h5\>
###### This is a \<h6\>

---

*This text is italic.*

**This text is bold.**

***This text is both.***

~~This text is rendered with strikethrough.~~

> You can use more than one level of indentation in blockquotes!  
> How neat is that?
>> That's pretty neat!

---

- Item
- Item
3. One last item

---

1. Item
    1. SubItem
    1. SubItem
- Item
    - SubItem

---

- [ ] First task to complete.
- [ ] Second task that needs done
- [x] This task has been completed

---

| Col1         | Col2     | Col3          |
| :----------- | :------: | ------------: |
| Left-aligned | Centered | Right-aligned |
| blah         | blah     | blah          |

---

    This is code marked by spaces
    So is this


John didn't even know what the `go_to()` function did!


```jsx
import React, { Component } from 'react'
import { get } from 'axios'

const Page = ({ html }) => (
  <div
    className="container"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

class MyComponent extends Component {
  state = { html: '' }
  compoentDidMount() {
    this.getPage('http://example.com')
  }
  async getPage(url) {
    this.setState({ html: await get(url) })
  }
  render() {
    return this.props.show ? <Page html={this.state.html} /> : null
  }
}

MyComponent.defaultProps = {
  show: true,
}

export default MyComponent
```
---

[Click me!](http://test.com/ "Link to Test.com")

[Click this link][link1] for more info about it!
[Also check out this link][foobar] if you want to.

[link1]: http://test.com/ "Cool!"
[foobar]: http://foobar.biz/ "Alright!"

[This][] is a link.

[this]: http://thisisalink.com/

![This is the alt-attribute for my image](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif "An optional title")

Your computer crashed? Try sending a
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>

<ajlende@gmail.com>
