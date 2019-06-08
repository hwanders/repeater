(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{38:function(e){e.exports={docs:{quickstart:{id:"quickstart",title:"Quickstart",description:"## Installation",source:"/Users/brian/Projects/channel/website/docs/01_quickstart.md",permalink:"/docs/quickstart",sidebar:"docs",category:"Getting Started",next:"overview",next_title:"Overview"},overview:{id:"overview",title:"Overview",description:"*NOTE: These docs assumes some familiarity with recent javascript features, specifically [promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises), [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) and [iterators/generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). If you are unfamiliar with these features, what follows will not make much sense.*",source:"/Users/brian/Projects/channel/website/docs/02_overview.md",permalink:"/docs/overview",sidebar:"docs",category:"Getting Started",next:"rationale",previous:"quickstart",previous_title:"Quickstart",next_title:"Rationale"},rationale:{id:"rationale",title:"Rationale",description:"While [async iterators](https://github.com/tc39/proposal-async-iteration) are available in most modern javascript runtimes, they have yet to achieve widespread usage due to various perceived [flaws](https://github.com/apollographql/graphql-subscriptions/issues/116) and [pitfalls](https://github.com/tc39/proposal-async-iteration/issues/126). What’s needed is something like the `Promise` constructor, which helped promises succeed by providing a common pattern for converting callback-based APIs into promises. The `Channel` constructor makes it easy to turn *any* callback-based source of data into an async iterator, and prevents common async iterator mistakes [by design](safety). The channel constructor is easy to memorize and is adaptable for almost every async iterator use case.",source:"/Users/brian/Projects/channel/website/docs/03_rationale.md",permalink:"/docs/rationale",sidebar:"docs",category:"Getting Started",next:"combinators",previous:"overview",previous_title:"Overview",next_title:"Combining Async Iterators"},utilities:{id:"utilities",title:"Additional Channel-Based Utilities",description:"In addition to the `@channel/channel` package, the [channel repository](https://github.com/channeljs/channel) and [package scope](https://www.npmjs.com/org/channel)  also contains various async utilities implemented with channels.",source:"/Users/brian/Projects/channel/website/docs/05_utilities.md",permalink:"/docs/utilities",sidebar:"docs",category:"Guides",next:"safety",previous:"combinators",previous_title:"Combining Async Iterators",next_title:"How are Channels “Safe”?"},combinators:{id:"combinators",title:"Combining Async Iterators",description:"Combining async iterators is a [non-trivial task](https://stackoverflow.com/questions/50585456/how-can-i-interleave-merge-async-iterables), and the `Channel` class provide four static methods inspired by `Promise.race` and `Promise.all` which provide different strategies for combining async iterators.",source:"/Users/brian/Projects/channel/website/docs/04_combinators.md",permalink:"/docs/combinators",sidebar:"docs",category:"Guides",next:"utilities",previous:"rationale",previous_title:"Rationale",next_title:"Additional Channel-Based Utilities"},"anti-patterns":{id:"anti-patterns",title:"Common Anti-Patterns",description:"**👷‍♀️ Under Construction 👷‍♂️**",source:"/Users/brian/Projects/channel/website/docs/08_anti-patterns.md",permalink:"/docs/anti-patterns",sidebar:"docs",category:"Guides",previous:"errors",previous_title:"Dealing with Errors"},errors:{id:"errors",title:"Dealing with Errors",description:"Because error handling is important for creating robust applications, channels are designed to catch and propagate any errors and promise rejections they receive in a predictable fashion. Every promise which a channel consumes is preemptively caught using the `Promise.prototype.catch` method so there is no possibility for unhandled rejections, and errors will cause the `next`/`return`/`throw` methods to reject depending on when or how the errors occur. If you encounter an unhandled promise rejection which could not have been handled via the async iterator methods, please [open an issue](https://github.com/channeljs/channel/issues/new).",source:"/Users/brian/Projects/channel/website/docs/07_errors.md",permalink:"/docs/errors",sidebar:"docs",category:"Guides",next:"anti-patterns",previous:"safety",previous_title:"How are Channels “Safe”?",next_title:"Common Anti-Patterns"},safety:{id:"safety",title:"How are Channels “Safe”?",description:"Most async iterator libraries currently available are prone to causing memory leaks through normal usage. Channels use the following design principles to prevent leaks:",source:"/Users/brian/Projects/channel/website/docs/06_safety.md",permalink:"/docs/safety",sidebar:"docs",category:"Guides",next:"errors",previous:"utilities",previous_title:"Additional Channel-Based Utilities",next_title:"Dealing with Errors"}},docsDir:"/Users/brian/Projects/channel/website/docs",docsSidebars:{docs:[{type:"category",label:"Getting Started",items:[{type:"doc",id:"quickstart"},{type:"doc",id:"overview"},{type:"doc",id:"rationale"}]},{type:"category",label:"Guides",items:[{type:"doc",id:"combinators"},{type:"doc",id:"utilities"},{type:"doc",id:"safety"},{type:"doc",id:"errors"},{type:"doc",id:"anti-patterns"}]}]},sourceToPermalink:{"/Users/brian/Projects/channel/website/docs/01_quickstart.md":"/docs/quickstart","/Users/brian/Projects/channel/website/docs/02_overview.md":"/docs/overview","/Users/brian/Projects/channel/website/docs/03_rationale.md":"/docs/rationale","/Users/brian/Projects/channel/website/docs/05_utilities.md":"/docs/utilities","/Users/brian/Projects/channel/website/docs/04_combinators.md":"/docs/combinators","/Users/brian/Projects/channel/website/docs/08_anti-patterns.md":"/docs/anti-patterns","/Users/brian/Projects/channel/website/docs/07_errors.md":"/docs/errors","/Users/brian/Projects/channel/website/docs/06_safety.md":"/docs/safety"},permalinkToId:{"/docs/quickstart":"quickstart","/docs/overview":"overview","/docs/rationale":"rationale","/docs/utilities":"utilities","/docs/combinators":"combinators","/docs/anti-patterns":"anti-patterns","/docs/errors":"errors","/docs/safety":"safety"}}}}]);