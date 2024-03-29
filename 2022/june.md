# June 2022

## HTML

### Attributes

+ Louis Lazaris (2022), **Those HTML Attributes You Never Use** &#8594; https://www.smashingmagazine.com/2022/03/html-attributes-you-never-use/
  - Louis Lazaris produces the [WebTools Weekly newsletter](https://webtoolsweekly.com/). You should subscribe if you haven't yet.
  - Contents:
    - The `enterkeyhint` Attribute For Virtual Keyboards 
    - The `title` Attribute On Stylesheets
    - The `cite` Attribute For The `<blockquote>` And `<q>` Elements
    - Attributes For Custom Ordered Lists
    - The `download` Attribute For The `<a>` Element
    - The `decoding` Attribute For The `<img>` Element
    - The `loading` Attribute For The `<iframe>` Element
    - The `form` Attribute for Form Fields
    - The `cite` And `datetime` Attributes For Deletions/Insertions
    - The `label` Attribute for the `<optgroup>` Element
    - The `imagesizes` and `imagesrcset` Attributes for Preloading Responsive Images
    - [Honorable mentions...](https://www.smashingmagazine.com/2022/03/html-attributes-you-never-use/#honorable-mentions)

### Elements

+ Ondřej Žára (2022), **\<little-planet\>** &#8594; https://github.com/ondras/little-planet
  > This project is a Custom HTML Element (AKA Web Component) that renders an interactive view of a panoramic photo. Can be used with no JavaScript knowledge: just include the component and continue with plain HTML.


## Railway-oriented programming (ROP)...

Prompted by Wes Bos tweet -- https://twitter.com/wesbos/status/1536720926112460801

+ Abiodun Olowode (2021), **Railway Oriented Programming In Rails Using Dry-Monads** &#8594; https://www.honeybadger.io/blog/railway-programming-dry-monads/
  + **Best post** with examples of actual Rails functions and *RSpec tests*!
  + Related => Pulkit Goyal (2022), **State Machines in Ruby: An Introduction** &#8594; https://blog.appsignal.com/2022/06/22/state-machines-in-ruby-an-introduction.html
+ Jon Minter (2020), **Asynchronous Functions and the Railway Oriented Programming Pattern** &#8594; https://www.jonminter.dev/posts/railway-oriented-programming-async/
+ Scott Wlaschin (2019), **Against Railway-Oriented Programming** *(when used thoughtlessly)* &#8594; https://fsharpforfunandprofit.com/posts/against-railway-oriented-programming/
+ Victor Jonah (@Vectormike_) (2020), **What is railway oriented programming?** &#8594; https://blog.logrocket.com/what-is-railway-oriented-programming/
  + While Wlaschin coined the term ROP in 2014, I think this introduction more accessible.

### ...and switches

+ Jean-Jacques Dubray (2021), **Revisiting Switch and If-then-else** &#8594; https://dzone.com/articles/revisiting-switch-and-if-then-else
+ Seán Barry (2020), **Using the Switch(true) Pattern in JavaScript** &#8594; https://seanbarry.dev/posts/switch-true-pattern


## No UI frameworks

+ Jérôme Beau (2022), **Design: #noFramework. Is it as hard as you think?** &#8594; https://javarome.medium.com/design-noframework-bbc00a02d9b3
  + Very promising with sections like *The Framework Tax* and *The Framework Silo* - see https://github.com/carbon-design-system/carbon-web-components#readme
  + Lots of tools and approaches mentioned
+ Jack Franklin (2022), **Why I don't miss React: a story about using the platform** &#8594; https://www.jackfranklin.co.uk/blog/working-with-react-and-the-web-platform/
  > *Pick dependencies that can be easily replaced.*


## JavaScript

+ Michael Yocca (2021), **Asynchronous Javascript: Sequential, Parallel, and Combined Processing** &#8594; https://michaelyocca.io/blogPost?post=asynchronous-javascript-sequential-parallel-concurrent
+ Matias Trujillo (20222), **A naturally asynchronous store** &#8594; https://dev.to/uppercod/a-naturally-asynchronous-store-57f4
  + Third in a series about *AtomicoJS*...
+ Mike Stanger (2022), **Pure Reduce Functions - Use Aggregator As A State** &#8594; https://dev.to/mimafogeus2/pure-reduce-functions-use-aggregator-as-a-state-32h6
+ @ealush (2022), **Vest validations framework** &#8594; https://vestjs.dev/
  > Declarative validations framework inspired by unit testing libraries
+ Craig Buckler (2022), ***stateZ (state-easy)* is a simple client-side state manager used to save values** &#8594; https://github.com/craigbuckler/statez

### Streams

Streams get their own section. This one is laden with detail...

+ Axel Rauschmayer (2022), **Using web streams on Node.js** &#8594; https://2ality.com/2022/06/web-streams-nodejs.html

### Workers

+ Stackoverflow (2016), **Answer to `How to wait for multiple WebWorkers in a loop`** &#8594; https://stackoverflow.com/a/39282225
  > You will want to use promises for this...`Promise.all` does the magic of waiting for concurrently running results, and the `step` function does the asynchronous looping using a recursive approach.


## CSS

+ Matthew Howell (2022), **Reasonable Colors** &#8594; https://reasonable.work/colors/
  > an open-source color system for building accessible, nice-looking color palettes
+ Bart Veneman (2022), **Things I learned giving CSS workshops** &#8594; https://www.veneman.dev/2022-05-things-i-learned-giving-css-workshops/
+ Jonathan Neal (2022), **CSS Custom States** &#8594; https://codepen.io/jonneal/pen/PoQvJrJ
  + codepen.io demo using `states = attachInternals()` and `:--clicked` pseudo-states.

