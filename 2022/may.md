# May 2022

+ *coming soon eventually...*

## section
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link


## Web Component Strategy: Wrap, don't replace, semantic HTML elements

+ Paul Heber (2022), **Web Components as Progressive Enhancement** &#8594; https://cloudfour.com/thinks/web-components-as-progressive-enhancement/
+ Zach Leatherman (2022), **Add Responsive-friendly Enhancements To `<details>` With `<details-utils>`** &#8594; https://www.zachleat.com/web/details-utils/


## Functional UI

*We still need to fix something in the SAM architecture claim that "the view is a function of the model", because the view is too easily confused with "the UI" vs. its representation. It is more correct to say that the view depends on a representation which is a function of the model.*

*The following deal with view-as-UI, but `raj` really offers something close to SAM: side-effects (that is, mutations to the view and possibly other actions) as first-class citizens.*

+ Chris Andrejewski (2018), **`raj`: the Elm architecture in JavaScript** &#8594; https://github.com/andrejewski/raj
  + [What is raj?](https://jew.ski/what-is-raj/)
  + Found `raj` while reading...
+ Bruno Couriol (2020), **Functional UI (Framework-Free at Last)** &#8594; https://www.infoq.com/articles/functional-UI-introduction-no-framework/


## Streams

*There are many ways to create stream APIs. Some of these have been listed previously.*

### Overview

+ Chris Arnott (2017), **A quick guide to javascript streams** &#8594; https://medium.com/@ChrisCanCompute/a-quick-guide-to-javascript-streams-273576613857
  + Includes link to [bacon.js](https://baconjs.github.io/)
+ Gregor Elke (2014), **Streams in JavaScript: a versatile Tool** &#8594; https://blog.codecentric.de/en/2014/05/streams-javascript-versatile-tool/
+ @winterbe (2015),  **How Streams Work** &#8594; https://winterbe.github.io/streamjs/#how-streams-work
  + Documentation for [stream.js](https://github.com/winterbe/streamjs), an early userland streaming library, "inspired by the Java 8 Streams API".
  
### Community

*Stream implementations from the community tend to be general purpose or platform-agnostic - "a sequence of values handled lazily" or "A Stream is a reactive data structure, similar to cells in spreadsheet applications.*

+ Caolan McMahon (2014), **highland** &#8594; https://caolan.github.io/highland/#
  + One of the first, if not *the* first, user land streaming utility belt libraries.
  + Highland begins with *pause*, *resume*, and *write* concepts, and offers a wealth of operation methods of processing, grouping, etc.
+ Simon Friis Vindum (2015), **flyd** &#8594; https://github.com/paldepind/flyd
  + flyd is a library for combining *observable* streams.
  + flyd streams are functions, and can be used as *event handlers*.
+ Mithril (2018), **mithril/stream** &#8594; https://mithril.js.org/stream.html
  + Stream generators package in the Mithril UI framework.
  + API is smaller than highland or flyd, but, like flyd, treats streams as functions.
+ RXJS v7 (2022), **Testing RxJS Code with Marble Diagrams** &#8594; https://rxjs.dev/guide/testing/marble-testing
  + Big utility belt library for events, treating *observables* as collections (hence, streams).
  + *__The marble testing guide is just darned interesting.__*
+ Fred Daoud (2018), **the Meiosis pattern** &#8594; http://meiosis.js.org/docs/01-introduction.html
  - *Meiosis* is a pattern, not a library, dependent on streaming input events.
  - Documentation updated, April 2022.
  - The `meiosis.stream.simpleStream` package is strongly influenced by Mithril and flyd &#8594; https://github.com/foxdonut/meiosis/blob/master/helpers/setup/source/tests/index-simple-stream.js

### Platform streams

*Platform streams are built specifically to handle network data transfer. They distinguish between stream types as readable, writable, duplex, and transform.*

+ Nodejs.dev (date), **Node.js Streams** &#8594; https://nodejs.dev/learn/nodejs-streams
  + Node.js streams are built on Node's event loop (the EventEmitter).
+ Mozilla Developer Network (date), **Streams API** &#8594; https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
  + Streams in the Browser are here (ReadableStream, WritableStream) and their APIs are vastly different from Node.js and the various user land stream libraries.


## Blog

+ Rasmus Porsager (2018), **flems** &#8594; https://github.com/porsager/flems
  > Flems is a static web app - no strings attached - browser code playground. It's great for documentation, examples, presentations, issues and what not.
  - unpkg URL example: `https://unpkg.com/flems@1.5.10/dist/flems.html`
  - hat tip to Fred Daoud (@foxdonut) who uses it on his Meiosis tutorial documentation.
+ cloudfare (2022), **cloudfare-docs github issue 3609: migrate to Hugo** &#8594; https://github.com/cloudflare/cloudflare-docs/pull/3609
  + Surprisingly great advice on using Hugo shortcodes, etc.

