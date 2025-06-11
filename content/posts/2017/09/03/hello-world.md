---
title: "Hello, World! 👋"
author: "Alex Lende"
date: 2017-09-03T06:19:00Z
categories:
  - Design
---

This post is mainly for testing the creation and styling of the blog post page of my website. What do you think? I think it's looking pretty slick so far! 😜

# This is a &lt;h1&gt;

## This is a &lt;h2&gt;

### This is a &lt;h3&gt;

#### This is a &lt;h4&gt;

##### This is a &lt;h5&gt;

###### This is a &lt;h6&gt;

---

*This text is italic.*

**This text is bold.**

***This text is both.***

~~This text is rendered with strikethrough.~~

You can use more than one level of indentation in blockquotes!  
How neat is that?

> That's pretty neat!

---

- Item
- Item

1. One last item

---

1. Item
   1. SubItem
   2. SubItem

- Item
  - SubItem

---

- [ ] First task to complete.
- [ ] Second task that needs done
- [x] This task has been completed

Apparently checklists aren't supported on WordPress.com 🤷‍♂️

---

| Col1 | Col2 | Col3 |
|:--|:--:|--:|
| Left-aligned | Centered | Right-aligned |
| blah | blah | blah |

*Markdown alignment doesn't seem to work when pasting from markdown and have to be added manually*

---

```
This is code marked by spaces
So is this
```

John didn't even know what the `go_to()` function did!

```javascript
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

[Click me!](http://test.com/)

[Click this link](http://test.com/) for more info about it!  
[Also check out this link](http://foobar.biz/) if you want to.

[This](http://thisisalink.com/) is a link.

![This is the alt-attribute for my image](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif "An optional title")

Your computer crashed? Try sending a  
Ctrl+Alt+Del

[ajlende@gmail.com](mailto:ajlende@gmail.com) 