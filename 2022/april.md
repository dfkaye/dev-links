# April 2022

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

## Undo

+ Wikipedia, [Undo](https://en.wikipedia.org/wiki/Undo)
  + multi-user global and local undo:
  + edit, undo, redo, apply... then save
  + git: commit, revert, push... then merge

## Posts

+ Brian Foy (2022), **What do you really get from IDE-driven development?** &#8594; https://briandfoy.github.io/ide-driven-development/
  > Part of our job as programmers is to know what’s possible and what we can do. IDEs, because of their interface, aren’t about discovery. They are about typing shortcuts, and there are a limited number of things that they can show us and people who aren’t going to see the docs outside of the IDE are unlikely to look through all the options that a cramped dropdown offers them. 
+ James Long (2022), **Exploring model-based testing for UIs** &#8594; https://jlongster.com/exploring-model-based-testing
  + On using fast-check to test the model changes that drive view changes.
  + Essentially testing that action-model combinations produce the right output based on input.
+ Lane Wagner (2020), **Optimize For Simplicity First** &#8594; https://wagslane.dev/posts/optimize-for-simplicit-first/
+ Moshe Vardi (2021), **Program Verification: Vision and Reality** &#8594; https://m-cacm.acm.org/magazines/2021/7/253448-program-verification
  > Hoare's vision came under a scathing attack a decade later in an influential 1979 Communications' article, "Social Processes and Proofs of Theorems and Programs," by De Millo, Lipton, and Perlis. They argued that mathematical proofs are accepted through a social process. Program-correctness proofs will not be subject to a similar social process, due to their length and narrowness, so they will not be socially accepted. They concluded that "this makes the formal verification process difficult to justify and manage." Hoare himself retracted, to some extent, his 1969 vision in 1995, writing "It has turned out that the world just does not suffer significantly from the kind of problems that our research was originally intended to solve."
+ Eric Scrivner (2020), **Notes on software abstraction** &#8594; https://oh4.co/site/on-abstraction.html
  + A long essay that eventually opposes object-oriented programming and views abstraction "compression guided by resemblance and analogy", essentially art and literature.
+ Kevin Ball (2022), **The `React.ReactNode` type is a black hole** &#8594; https://changelog.com/posts/the-react-reactnode-type-is-a-black-hole
  + Another long essay that describes a bug that `TypeScript` could not catch.
  > Isn’t this type of bug exactly what using TypeScript and types is supposed to prevent? How in the world had the type system allowed something that was not renderable by React to be passed into a prop with type `string | React.ReactNode`?
  + Turns out, **DefinitelyTyped** ships its own override of the `ReactFragment` type as either an empty object or a `ReactNodeArray`.
  + No discussion of tests.

