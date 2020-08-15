# September 2020 

+ *coming soon eventually...*

## section

+ author (date), **title** &#8594; link

## User Safety

+ Anders Hovmöller (2020), **Transparent sync** &#8594; https://kodare.net/2020/08/01/transparent-sync.html
  - @andershovmoller does an excellent, succint job describing an unsafe state in an application and affording the user a way back to a safe state.

## VendorOps

+ rachelbythebay (2020), **We are a spectrum of jobs, not just one** &#8594; http://rachelbythebay.com/w/2020/08/14/jobs/
  - > It's VendorOps. You are hired to tend the vendor's stuff.

## Algorithms

+ Phil Freeman (2018), **Incrementally Improving The DOM** &#8594; https://blog.functorial.com/posts/2018-04-08-Incrementally-Improving-The-DOM.html
  - Follow-up to **You Might Not Need the Virtual DOM** &#8594; https://blog.functorial.com/posts/2018-03-12-You-Might-Not-Need-The-Virtual-DOM.html
  - Quote from Cai, Giarrusso, Rendel and Ostermann (2013), **A Theory of Changes for Higher-Order Languages (PDF)** &#8594; https://arxiv.org/abs/1312.0658:
    > If the result of an expensive computation is invalidated by a small change to the input, the old result should be updated incrementally instead of reexecuting the whole computation.
+ @ProCode (2020), **Sliding Window Technique - From O(N²) to O(N)🔥** &#8594; https://dev.to/procode/sliding-window-technique-from-o-n-to-o-n-3la3
+ John D. Cook (2020), **Decomposing functions of many variables to functions of one variable (using *Kolmogorov superposition*)** &#8594; https://www.johndcook.com/blog/2020/07/15/kolmogorov-superposition/
+ Kirill Rakhman (2020), **Solving Sudoku with Graph Theory** &#8594; https://rakhman.info/blog/solving-sudoku-with-graph-theory/

## JQuery (your read that right)

+ Meredith Matthews (2020), **Reactive jQuery for Spaghetti-fied Legacy Codebases** &#8594; https://css-tricks.com/reactive-jquery-for-spaghetti-fied-legacy-codebases-or-when-you-cant-have-nice-things/
  - use custom HTML attributes for metadata and styling hooks.
  - keep the state in the JavaScript, observe our events, and react to changes as they happen.
  - >  Working with a pattern like this maintains a single source of truth in your state object that you control, you can trust and you can enforce. If you ever lose trust that your DOM is correct, all you need to do is re-run the update function with no arguments and your values become consistent with the state object again.

## TypeScript (JSDoc approaches)

+ Caleb Williams (2020), **TypeScript, Minus TypeScript** &#8594; https://css-tricks.com/typescript-minus-typescript/
  - Pretty good setup, but the *Casting* section (TS can't infer value on event.target) is a deal-breaker for me.
  - Plus, people use TS to couple the front-end far more tightly to the back end.
+ Jake Verbaten (2020), **tsdocstandard** &#8594; https://github.com/Raynos/tsdocstandard
  - > Standard but also use TypeScript on JS files with jsdoc.
+ @TruckJS (2018), **Type Safe JavaScript with JSDoc** &#8594; https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76
  - Repeating this one for probably the third time now...
