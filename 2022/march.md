# March 2022

+ *coming soon eventually...*

## section

+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link

## Ignorance

**One reason most web developers don't know anything while asserting everything is that they spend all their time writing instead of reading.**

While feeling his way toward a theory of data, George H. Mealy, in 1967, wrote this about programming languages:

> [W]hat we really need is fewer data types along with apparatus which will allow the user to define his own [data type].

<cite>Source: [Another look at Data](https://mba.eci.ufmg.br/wp-content/uploads/data_mealy.pdf).</cite>

Barbara Liskov and Steven Zilles referred to Mealy's paper in their own in 1974, [Programming with Abstract Data Types](https://gleitzman.com/media/docs/adt-liskov.pdf), which they follow up a year later with [Specification Techniques for Data Abstractions](http://csg.csail.mit.edu/CSGArchives/memos/Memo-117.pdf).

## Abstraction.

+ Marianne Bellotti (2022), **The Unreasonableness of Math is Context Independence** &#8594; https://medium.com/@bellmar/the-unreasonableness-of-math-is-context-independence-6826fd5f3515
  - > \[safety] controls work best when the abstractions at their foundation are *context-independent*.
  + see also Marianne Bellotti (2020), **The Subtle Power of Booleans** &#8594; https://medium.com/software-safety/the-subtle-power-of-booleans-e6d5fa2fcc4a
    - > Programming with truth and statefulness.

## Testing

+ Dave Schinkel (2019), **TDD on Punch Cards: Mercury Space Program** &#8594; https://daveschinkel.medium.com/tdd-on-punch-cards-f17c25282fa4
  + Dave's correspondence with Jerry Weinberg who replies at one point:
  + > I suppose this process sounds cumbersome, and it certainly was, but it was what we had. Perhaps because it was so cumbersome, or perhaps because the machines were so costly, we tried to avoid many cycles of coding-testing-correcting. **We wrote out tests up front to the extent we could, had them punched into data cards, and when the code was ready, used them to run our tests**.


## Types

+ @hirrolot (2022), **Why Static Languages Suffer From Complexity** &#8594; https://hirrolot.github.io/posts/why-static-languages-suffer-from-complexity.html
  + Stunning insightful eloquent essay by a 17-year-old programmer.
  + One comment likens TypeScript's "compile-time validation" to **technical debt dressed like a solution**.

## I/O

+ Ben Hoyt (2020), **Don’t try to sanitize input. Escape output.** &#8594; https://benhoyt.com/writings/dont-sanitize-do-escape/

## Events

+ Germano Gabbianelli (2022), **Server-Sent Events: the alternative to WebSockets you should be using** &#8594; https://germano.dev/sse-websockets
  - > When developing real-time web applications, WebSockets might be the first thing that come to your mind. However, Server Sent Events (SSE) are a simpler alternative that is often superior.
+ Baldur Bjarnason (2021), **The event listening toolkit: five ways to get out of an event handling mess** &#8594; https://www.baldurbjarnason.com/2021/five-ways-to-get-out-of-the-event-handling-mess/

## Frameworks

+ Noam Rosenthal (2022), **What Web Frameworks Solve: The Vanilla Alternative (Part 2)** &#8594; https://www.smashingmagazine.com/2022/02/web-frameworks-guide-part2/


## Generators

+ goqr.me (2015), **QR Code Generator** &#8594; https://goqr.me/
+ Mozilla (2018), **SubResource Integrity (SRI) Hash Generator** &#8594; https://www.srihash.org/


### Cancelable promise

+ Pierre-Yves Gérardy (2016), **You can already cancel ES6 Promises** &#8594; https://gist.github.com/pygy/6290f78b078e22418821b07d8d63f111
  - Cancelable promise implementation with links to others in the comments.
  - However, promises represent values rather than actions.
  - Values can't be "cancelled" but actions can (so long as they haven't yet completed).
  - Values can be awaited, but actions... and here the semantics of the terminology breaks down.
  - Suppose we await values from a stream of values. Is the stream a value?
  - OK, stop it. The stream is not the values it sends, but is its own value.
  - An action is its own value.
  - We don't cancel streams, we stop listening to them, or unsubscribe.
  - Which is to say, *we cancel our subscriptions to them*.
  - async/await makes directly cancelling or unsubscribing from promises impossible.
  - Keep working on the distinction between `await promise` and `await value`...


