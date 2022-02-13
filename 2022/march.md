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

"[W]hat we really need is fewer data types along with apparatus which will allow the user to define his own [data type]."

George Mealy, Another look at Data, 1967,
https://mba.eci.ufmg.br/wp-content/uploads/data_mealy.pdf

Barbara Liskov and Steven Zilles referred to this paper in their own in 1974, Programming with Abstract Data Types,
https://gleitzman.com/media/docs/adt-liskov.pdf

which they follow up with Specification Techniques for Data Abstractions, 1975
http://csg.csail.mit.edu/CSGArchives/memos/Memo-117.pdf

## Abstraction

+ Marianne Bellotti (2022), **title** &#8594; https://medium.com/@bellmar/the-unreasonableness-of-math-is-context-independence-6826fd5f3515
  - > \[safety] controls work best when the abstractions at their foundation are *context-independent*.
  + see also Marianne Bellotti (2020), **The Subtle Power of Booleans** &#8594; https://medium.com/software-safety/the-subtle-power-of-booleans-e6d5fa2fcc4a
    - > Programming with truth and statefulness.

## SSE EventSource

+ Germano Gabbianelli (2022), **Server-Sent Events: the alternative to WebSockets you should be using** &#8594; https://germano.dev/sse-websockets
  - > When developing real-time web applications, WebSockets might be the first thing that come to your mind. However, Server Sent Events (SSE) are a simpler alternative that is often superior.

## Generators

+ goqr.me (2015), **QR Code Generator** &#8594; https://goqr.me/
+ Mozilla (2018), **SubResource Integrity (SRI) Hash Generator** &#8594; https://www.srihash.org/


### Cancelable Promise

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


