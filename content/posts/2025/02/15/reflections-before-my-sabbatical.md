---
title: "Reflections on AI Code"
author: "Alex Lende"
date: 2025-02-15T00:43:57Z
categories:
  - Code
draft: true
---

## Code is poetry

One of the things that I thought about while working at Automattic is how 'code is poetry'. In Matt Mullenweg's words, "The inspiration was poets like T. S. Eliot who would embed a ton meaning and allusion into every line. I think of coding not just as a means to an end but a craft in and of itself that can exhibit beauty, not just utility." 

Poetry has a quality of depth. It's written to evoke specific feelings in the reader, just like finding an elegant solution to a complex problem evokes feelings in me. Coming across a tangle of code that's only meant to solve a simple problem may also evoke feelings in me, but I wouldn't consider it poetry because that type of code usually lacks the depth and intention that poetry has. Code poetry has to effectively communicate its logic and intention, not just be intentional and evoke feelings.

I went to school for software engineering at the educational institution which lays claim to the [first automatic electronic digital computer](https://href.li/?https://en.wikipedia.org/wiki/Atanasoff%E2%80%93Berry_computer), so many instructors would talk at length about the history of computing. I started out with C and worked my way down to Assembly and circuits for my classwork while learning and specializing in JavaScript/HTML/CSS during my free time and for internships. I've seen code poetry in many different mediums.

Assembly is ripe with opportunities for elegant solutions to complex problems if you've dedicated plenty of time to deeply understand how the instructions work in hardware. At its best, you can see the data flowing efficiently through registers like a river following the optimal path down a mountain. That is a kind of poetry in assembly.

C was a paradigm shift in computing. When you're working with a "high level" programming language, you can't effectively see the registers and data flowing between them as well. But that doesn't mean there's no poetry in C. In a language where the compiler handles optimizations in the for register usage and specific instructions, using allocated memory purposefully like bees utilizing the hexagonal cells of their beehive for brood or honey. That is a kind of poetry in C.

JavaScript is different story too. With the number of runtimes and different JIT optimizations in each, trying to manage memory can get in the way of JavaScript's poetry. Here, the poetry is in the expression of ideas through functions like instruments in an orchestra coming together to weave a tapestry of music. That is a kind of poetry in JavaScript.

In a broader sense, I think good architecture is a form of code poetry. Well architected code can make it easy to add new features without breaking existing things. Not necessarily by decoupling everything, but by providing the right framework to think about a problem. The fractal architecture of components is a good example. Well thought out architecture is poetry too.

Poetry is something that stands the test of time. It's something worth protecting and holding on to.

### Code is disposable

I've spent some time mentoring high school students for the FIRST Robotics Competition. They build a new robot every year, and it's truly amazing what the team can accomplish just during the few hours of practice that they have each week in just a few weeks. They may not have a *deep* understanding of what [command-based programming](https://href.li/?https://docs.wpilib.org/en/stable/docs/software/commandbased/what-is-command-based.html) is in Java, for example, but they can still use it to implement the functionality of their robot and create something amazing. No poetry needed.

I've also been watching how others use AI to write software—from my friends and colleagues at Automattic developing the largest website creation tool on the internet to my friends elsewhere working on smaller projects that are both new and old to content creators doing things like building an [AI chat interface in 5 days](https://href.li/?https://www.youtube.com/watch?v=QLvIoi2s1zY).

Something I've noticed about the people who *seem* to accomplish the most with AI is that they don't treat code as poetry. For them, code is nothing more than a means to an end—only the utility matters. They don't work on big or long-lived projects because why should you care when it's so easy to build a brand new thing that solves the new problem?

[Tailwind CSS](https://href.li/?https://tailwindcss.com) is one of the tools that I've seen work quite well for AI assisted software development. Tailwind code isn't poetry. It's hard to write by hand and isn't particularly readable. It's just a utility. It makes code more disposable by removing the interconnectedness that CSS can have and by making the component the unit of reusability.

[React Compiler](https://href.li/?https://react.dev/learn/react-compiler) will help write more disposable code too. It mitigates many React performance pitfalls pretty much by memoizing everything. The art of dividing components in such a way as to minimize re-renders isn't as important with the compiler.

AI coding assistants are like those talented robotics students. Given the right context, they can build something amazing. And they don't need to write code poetry to build it as long as the tools and frameworks they use support the idea of disposable code.

Concepts like [loose coupling](https://href.li/?https://en.wikipedia.org/wiki/Loose_coupling) via command based programming for high school robotics or [high cohesion](https://href.li/?https://en.wikipedia.org/wiki/Cohesion_(computer_science)) through a component based framework such as React for the web development that we do every day help write code that is more disposable. The idea has been around for a long time, but it's more important than ever given how AI generates code.

Most LLMs these days that are used for coding don't have a big enough context window to hold a large codebase. I think it writes disposable code, in part, because it can't understand all the code at once. We can't think about all the code at once either, but I liken the context window of an LLM to years of experience working in a specific codebase. I haven't tried the two million token limit for [Gemini 1.5 Pro](https://href.li/?https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro), but I don't imagine even that is enough for the codebases that many of us are working on at Automattic.

Disposable code will still be useful as context windows grow.

## Code is _____

If we want to leverage the full power of AI for writing code right now, our code has to become more disposable. So, then, where is the poetry in the era of AI generated code?

As for me, I don't think the poetry of AI assisted software development will be in the code that AI generates. It'll be in the frameworks and tools that surround the AI generated code. Our frameworks and tools will guide the code generation like a sheepdog guiding a flock of sheep. 