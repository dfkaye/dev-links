# August 2020 

+ *coming soon eventually...*

## section

+ author (date), **title** &#8594; link

## Thiel Truth Rebellion

+ Tim Ruffles (2020), **Server-Side Rendering is a Thiel Truth** &#8594; https://timr.co/server-side-rendering-is-a-thiel-truth
+ Jeremy Bowers (2020), **Why Duck Typing Is Safe** &#8594; http://www.jerf.org/iri/post/2954

## Design help

+ **A11Y Style Guide** &#8594; https://a11y-style-guide.com/style-guide/
+ Erik Kroes (2020), **Guide to Accessible Web Components** &#8594; https://dev.to/erikkroes/the-guide-to-accessible-web-components-1mkd
+ Stephanie Eckles (2020), **Container Query Solutions with CSS Grid and Flexbox** &#8594; https://dev.to/5t3ph/container-query-solutions-with-css-grid-and-flexbox-30cj
+ Christian Heilmann (2020), **Progressively enhancing radio buttons with SVG whilst staying accessible** &#8594; https://christianheilmann.com/2020/05/05/progressively-enhancing-radio-buttons-with-svg-whilst-staying-accessible/
+ John Wickerson (2019), **How to draw block diagrams** &#8594; https://johnwickerson.wordpress.com/2019/08/08/block-diagrams/
+ `No Design Development`, **A collection of tools for developers who have little to no artistic talent** &#8594;  https://nodesign.dev/
+ `Basic.css`, **Basic.css: Classless CSS Starter File** &#8594; https://vladocar.github.io/Basic.css/
+ Bennett Feely (2020), **USA.css**  https://bennettfeely.com/usacss/
  - > The most American CSS stylesheet. Style your webpage with the stars and stripes as CSS backgrounds. All units are set in inches.

## TypeScript

+ @TruckJS (2018), **Type Safe JavaScript with JSDoc** &#8594; https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76
  - **BEST RESOURCE I'VE FOUND regarding TS checks via JSDoc without polluting JS with annotations** - however, some examples go far too deep, and the author admits early that type errors will be least of your problems:
    - > Don’t assume that because your code passed type checks during build time that there will be no type errors. Type errors that happen during runtime can be avoided by using type guards at appropriate places. In general, type errors are going to be the smallest number of bugs that you will have to deal with. For your users, UI/UX inconsistencies will be the things that drive them up the wall. Management will label UI bugs as Pri-1, and your type errors will at best be Pri-3 or else backlogged.
  - Go to VS Code preferences &gt: settings and enter `"javascript.implicitProjectConfig.checkJs": true`
  - Add `// @ts-check`, or `// @ts-nocheck` at top of file
  - Add `// @ts-ignore` before blocks with issues
  - In a `jsconfig.json` file, set`"compilerOptions": { "checkJs": true }`
  - In package.json add a script, `"scripts": { "checkjs": "tsc --allowJs --checkJs --noEmit --target ES5 src/*.js" }`
  - Plenty of examples to pick from.

## Property Testing

+ Carolyn Stransky (2020), **Property-based testing for JavaScript developers** &#8594; https://dev.to/meeshkan/property-based-testing-for-javascript-developers-21b2
  - An introduction using Nicolas Dubien's fast-check` &#8594; https://github.com/dubzzz/fast-check/
+ Lars Hupel (2020), **Series: Conflict-Free Replicated Data Types** &#8594; https://lars.hupel.info/topics/crdt/01-intro
  - Lars uses `fast-check` in the browser in hais CRDT series.
+ Oskar Wickstrom (2020), **WebCheck: generative browser testing** &#8594; https://webcheck.tools/
  - Re-branded as **Quickstrom** at https://quickstrom.io/
  
## JavaScript

+ Menelaos Perdikeas (repo), **js-structural-sharing** &#8594; https://github.com/mperdikeas/js-structural-sharing
  - > Tests whether two objects (recursively) have structural sharing. In other words, whether they access a common memory location. If the exported method `shareMemory` returns `false` then each of the objects can be modified, anywhere in its graph, without affecting the other.
+ David Wells (2020), **Cleaner async JavaScript code without the try/catch mess** &#8594; https://davidwells.io/blog/cleaner-async-await-code-without-try-catch
+ @ealush (2020), **`vest` - validation testing** &#8594; https://github.com/ealush/vest
  - contract utility to separate validation logic from feature logic.
  - syntax derived from Mocha or Jest.
+ Danny Moerkerke (2019), **Data binding for Web Components in just a few lines of code** &#8594; https://www.dannymoerkerke.com/blog/data-binding-for-web-components-in-just-a-few-lines-of-code
+ Danny Moerkerke (2019), **Using the DOM like a Pro** &#8594; https://itnext.io/using-the-dom-like-a-pro-163a6c552eba
+ `UsefulAngle.com` (2017), **Autogrow a textarea with JavaScript** &#8594; https://usefulangle.com/post/41/javascript-textarea-autogrow-adjust-height-based-on-content

## `awk`

+ Ketan C Maheshwari (2020), **Running Awk in parallel to process 256M records** &#8594; https://ketancmaheshwari.github.io/posts/2020/05/24/SMC18-Data-Challenge-4.html
  > Awk crunches massive data; a High Performance Computing (HPC) script calls hundreds of Awk concurrently. Fast and scalable in-memory solution on a fat machine.

## Postmodern logic

+ Chip Morningstar (1993), **How To Deconstruct Almost Anything (My Postmodern Adventure)** &#8594; http://www.fudco.com/chip/deconstr.html

## Abstract interpretation

+ Wikipedia, **Abstract interpretation" &#8594; https://en.wikipedia.org/wiki/Abstract_interpretation
+ OOAD (object-oriented analysis and design), **Dynamic modeling** &#8594; https://www.tutorialspoint.com/object_oriented_analysis_design/ooad_dynamic_modeling.htm
+ Nitish Kumar (on geeksforgeeks.org), **How to solve a Dynamic Programming problem** &#8594; https://www.geeksforgeeks.org/solve-dynamic-programming-problem/
+ Wikipedia, **Kripke structure** &#8594; https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)
