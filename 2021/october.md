# October 2021

+ *coming soon eventually...*

## section

+ Scott Wlaschin (2014), **Choosing properties for property-based testing** &#8594; https://fsharpforfunandprofit.com/posts/property-based-testing-2/
  + cf. especially part 4 in the series where Scott checks Arabic to Roman numeral conversion, and back again, using a variety of approaches &#8594;  https://fsharpforfunandprofit.com/posts/property-based-testing-4/
+ Justin Etheredge (2021), **Use Spreadsheets Everywhere!** &#8594; https://www.simplethread.com/use-spreadsheets-everywhere/
+ Dawid Ciężarkiewicz (2021), **Growing Object-Oriented Software vs what I would do** &#8594; https://dpc.pw/growing-object-oriented-software-vs-what-i-would-do
+ Nolan Lawson (2021), **Improving responsiveness in text inputs** &#8594; https://nolanlawson.com/2021/08/08/improving-responsiveness-in-text-inputs/
  ```js
  var queued = false
  textarea.addEventListener('input', () => {
    if (!queued) {
      queued = true
      requestIdleCallback(() => {
        updateUI(textarea.value)
        queued = false
      })
    }
  })
  ```
+ Victor Maia (2021), **Kind** &#8594; https://github.com/uwu-tech/Kind
  > minimal, efficient and practical proof and programming language
+ Stefan Gössner (2021), **Efficient Handling of Polygon Data With The ES6 Proxy Object** &#8594; https://goessner.github.io/polygon-data/
  > Lightweight Technique for Data Conversion, Topological and Geometric Transformations.
+ Tapas Adhikary (2019), **Metaprogramming: An Introduction to JavaScript(ES6) Proxy** &#8594; https://blog.greenroots.info/metaprogramming-an-introduction-to-javascriptes6-proxy
+ Technion Institute (2021), **On chaos, drunks and a Solution to the Chaotic Three-Body Problem – the research of Yonadav Barry Ginat and Hagai Perets** &#8594; https://phys.technion.ac.il/en/about/research-bits/on-chaos-drunks-and-a-solution-to-the-chaotic-three-body-problem-the-research-of-yonadav-barry-ginat-and-hagai-perets
+ Scott O'Hara (2021), **ARIA Switch Demos** &#8594; https://scottaohara.github.io/aria-switch-control/
+ Bartosz Sypytkowski (2021), **Operation-based CRDTs: JSON document** &#8594; https://bartoszsypytkowski.com/operation-based-crdts-json-document/
  + Part of long series on Conflict-free Replication Data Types.
+ Wes Goulet (2021), **How to Write TypeScript Interfaces in JSDoc Comments** &#8594; https://goulet.dev/posts/how-to-write-ts-interfaces-in-jsdoc/
+ Craig Buckler (2021), **The Complete Guide to HTML Forms and Constraint Validation** &#8594; https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/
+ Lorin Hochstein (2018), **TLA+ is hard to learn** &#8594; https://surfingcomplexity.blog/2018/12/24/tla-is-hard-to-learn/
+ Federico Kereki (2021), **Forever Functional: Higher Order Functions -- Functions to rule functions** &#8594; https://blog.openreplay.com/forever-functional-higher-order-functions-functions-to-rule-functions
  + Part of JavaScript series on chaining, point-free style, Promises, Proxies, *et al*.
+ Chris Coyier (2019), **Can you view print stylesheets applied directly in the browser?** &#8594; https://css-tricks.com/can-you-view-print-stylesheets-applied-directly-in-the-browser/
  + Yes, using dev tools.
+ author (2020), **What happened to Components being just a visual thing?** &#8594; https://dev.to/redbar0n/what-happened-to-components-being-just-a-visual-thing-22hc
  + > I feel that **putting all sorts of logical components into the rendering is abusing the original idea of components**.
  + > **logic-posing-as-markup**.
+ Greg Wilson, and others (2021), **It Will Never Work in Theory** &#8594; https://neverworkintheory.org/
> Short summaries of recent results in empirical software engineering research 
+ Mike Wilcox at Club Ajax (2021), **on** &#8594; https://github.com/clubajax/on
  + A library for making it easy to manage DOM Node events.
+ Jesse Duffield (2021), **title** &#8594; https://github.com/jesseduffield/OK
  + > OK? is a modern, dynamically typed programming language with a vision for the future. OK?'s mission is to do away with the needless complexity of today's programming languages and let you focus on what matters. 
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link

