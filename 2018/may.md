
# May 2018

## Standouts

+ [**Real-time Sudoku Solver where your input is a camera feed**](http://emaraic.com/blog/realtime-sudoku-solver)
+ [*High-Performance Matrix Multiplication*](https://gist.github.com/nadavrot/5b35d44e8ba3dd718e595e40184d03f0)
+ [Modal Logic Playground](http://rkirsling.github.io/modallogic/)
    - Ross Kirsling is @rkirsling - OMG I work with this him @PlayStation
+ [Logic In Action](http://www.logicinaction.org/)
    - Johan van Benthem, [An old discipline with a new twist: the course "Logic in Action"](http://www.logicinaction.org/docs/RennesRevise.pdf)
+ Lawrence Krubner, [*Coral Reef Pattern* of incremental improvement](http://www.smashcompany.com/technology/the-coral-reef-pattern-of-incremental-improvement)
+ Lawrence Krubner, [Object Oriented Programming is *an expensive disaster which must end*](http://www.smashcompany.com/technology/object-oriented-programming-is-an-expensive-disaster-which-must-end)
+ Ted Kaminski, [Data, objects, and how we're railroaded into poor design](http://www.tedinski.com/2018/01/23/data-objects-and-being-railroaded-into-misdesign.html)
  - > "Fundamentally, the issue I see in the example given is that the poor design results from thinking of Loans as objects. If it’s an object, it has to have identity, and if it has identity, someone has to store it. The improved design comes from thinking of Loans as data, to be passed around between objects. Loans no longer have their own identities, except perhaps internally with each service. Regardless, we get a better design by distinguishing between Loans as data and Loans as objects."
+ Michael Nygard, [Services by Lifecycle](http://www.michaelnygard.com/blog/2018/01/services-by-lifecycle/)
    - "Instead of viewing this as a single entity with a bunch of booleans, or a CURRENT_STATE attribute (which implies a state machine that is unknown to consumers) we can view each state as a different thing."
    - "make each state into its own service"
+ Ben Moseley and Peter Marks, [Out of the Tar Pit (Complexity)](http://curtclifton.net/papers/MoseleyMarks06a.pdf)
+ Avery Laird, [Piece Tables, Splay Trees, and "Trables"](http://www.averylaird.com/programming/piece-table/2018/05/10/insertions-piece-table/)
    - Hat tip: [Morning Cup of Code, Issue #41 - May 14, 2018](https://us18.campaign-archive.com/?u=ab0f46cf302c0ed836e0bf0ad&id=d70741a408)
+ Avery Laird, [Text Editor: Data Structures (piece tables)](http://www.averylaird.com/programming/the%20text%20editor/2017/09/30/the-piece-table/)
    - Piece tables in depth: Charles Crowley, UNM, 1998, [Data Structures for Text Sequences](https://www.cs.unm.edu/~crowley/papers/sds.pdf)
    - [Atom's new concurrency-friendly buffer implementation](http://blog.atom.io/2017/10/12/atoms-new-buffer-implementation.html)
+ Adam Palay, [From Unit Testing to Formal Proofs](https://www.adampalay.com/blog/2018/05/04/from-unit-testing-to-formal-proofs/)
+ Jay Kreps (2014), [Why local state is a fundamental primitive in stream processing](https://www.oreilly.com/ideas/why-local-state-is-a-fundamental-primitive-in-stream-processing)
    -  an answer to the question, "What is state and why do you need it?"
    
## Data Hydration

> Hydration refers to the client-side process during which Vue takes over the static HTML sent by the server and turns it into dynamic DOM that can react to client-side data changes.
> --from [Vue.js Server-Side Rendering Guide: Client-side Hydration](https://ssr.vuejs.org/en/hydration.html)
+ Bartosz Szczeciński, [Understanding ReactJS — **data hydration** / initialization](https://medium.com/@baphemot/understanding-reactjs-data-hydration-initialization-bacbb790c7cb)
+ Gleb Bahmutov, "Hydrate at Build Time", [Generate the initial HTML markup from web app at build time to avoid blank screen](https://glebbahmutov.com/blog/hydrate-at-build-time/)
    - See also "Hydrate your Apps", [Remove the empty page flicker on web application startup](https://glebbahmutov.com/blog/hydrate-your-apps/)

## Computations, States, Relations

+ Jean-Jacques Dubray, [State Machines and Computing](https://www.ebpml.org/blog15/2015/01/state-machines-and-computing/)
+ Leslie Lamport, [Computation and State Machines](http://lamport.azurewebsites.net/pubs/state-machine.pdf)
+ Bert G. Wachsmuth, [Relations and Functions](https://mathcs.org/analysis/reals/logic/relation.html)
    - from [Interactive Real Analysis](https://mathcs.org/analysis/reals/index.html), "an online, interactive textbook for Real Analysis or Advanced Calculus in one real variable."
    
## Rest of Links
+ [*Morning Cup of Coding* from HumanReadableMag](https://www.humanreadablemag.com/morningcupofcoding/)
+ [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
+ [How to **turn any GitHub repo into a CDN**](https://gomakethings.com/how-to-turn-any-github-repo-into-a-cdn/)
+ [`babylon.js` framework for building 3D games and experiences with HTML5, WebGL, WebVR and Web Audio](http://www.babylonjs.com/)
+ [The Power of `Prolog`](https://www.metalevel.at/prolog)
+ *Tip* [React.js: props vs. state](http://lucybain.com/blog/2016/react-state-vs-pros/)
+ [Enlightening post about ReasonML and ReactReason](https://www.imaginarycloud.com/blog/reasonml-react-as-first-intended/)
+ [SessionStack's series, "How JavaScript Works"](https://blog.sessionstack.com/tagged/tutorial)
