# July 2018 (collected in June)

## THESE NEED TO BE ORGANIZED BETTER :)

+ My tweet, [Make `#error_first_design` a first-class citizen](https://twitter.com/dfkaye/status/999332316492120064)
+ [**Stringify `DOM` nodes using `JSON`** (and revive again)](https://gist.github.com/sstur/7379870)
    - `toDOM(x)` uses `JSON.parse` if `x` is a string
    - **FIX**: `attributes` are entered as arrays (index 0 contains the name, 1 contains the value) rather than name-value maps; see https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
+ [Firefox **Accessibility Inspector**](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)
+ [Why My 11-Year Old Stopped Coding . . . Then Switched to Python](https://hackernoon.com/why-my-11-year-old-stopped-coding-then-started-again-ccc259f2f1a5)
    - Wish I'd had python around as a kid ~ things *computative* would have made way more sense
+ Lindasy Wild aka @stananick, [How and Why We Unit Test Our Sass](https://seesparkbox.com/foundry/how_and_why_we_unit_test_our_sass)
+ from @innovati, [How to Write a Container Queries Plugin](https://codepen.io/tomhodgins/post/how-to-write-a-container-queries-plugin)
+ Really simple [`SVG` Patterns using single `unicode` characters](https://notchris.net/patterns/)
+ Get the benefits of JSX from React by [**Emulating React and JSX in Vanilla JS**](https://www.toptal.com/javascript/emulating-react-jsx-in-vanilla-javascript)
    - gist with modified source [react-jsx-in-vanilla.js ](https://gist.github.com/dfkaye/f3229e5ace79b6873022987f160c7b61)
+ Dr. Boolean (aka Brian Lonsdorf) on [**Debugging** Functional JS](https://medium.com/@drboolean/debugging-functional-7deb4688a08c)
+ Adrian Colyer reports on [**Debugging** data flows in `reactive` programs](https://blog.acolyer.org/2018/06/29/debugging-data-flows-in-reactive-programs/)
    - André Staltz, [How to **debug** `RxJS` code](https://staltz.com/how-to-debug-rxjs-code.html)
+ Adrian Colyer reports on [How not to structure your database-backed web applications: a study of performance bugs in the wild](https://blog.acolyer.org/2018/06/28/how-_not_-to-structure-your-database-backed-web-applications-a-study-of-performance-bugs-in-the-wild/)
    - (PDF) based on [How *not* to structure your database-backed web applications: a study of performance bugs in the wild](https://hyperloop-rails.github.io/220-HowNotStructure.pdf)
    - (PDF) which includes [Static Detection of Asymptotic Performance Bugs in Collection Traversals](http://www.cs.utexas.edu/~lin/papers/pldi15.pdf)
+ [Proof by Infinite Descent](https://en.wikipedia.org/wiki/Proof_by_infinite_descent)
    - A proof by contradiction that relies on the least integer principle; see Diophantine equation (next)
+ Uncle Bob Martin on `Diophantine equations` and [Undecidability i.e., NOESTIMATES](http://blog.cleancoder.com/uncle-bob/2018/06/21/IntegersAndEstimates.html)
+  *Sounds like famous last words*, ["Designing for Accessiblity is not hard"](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94)
+ `Python` **property-based testing** with [Hypothesis](http://hypothesis.readthedocs.io/en/latest/index.html)
+ "Explore how your product should work, before building it" with [Sketch.systems](https://sketch.systems/)
+ Uncle Bob on TDD and double entry bookkeeping [The parallels between double entry bookkeeping and Test Driven Development are deep and plentiful](http://blog.cleancoder.com/uncle-bob/2017/12/18/Excuses.html)
+ Zoltan Kochan and why we should use [`pnpm`](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html)
    - it's really fast because it uses symlinks rather than directory copying
    - see also [Flat node_modules is not the only way](https://dev.to/zkochan/flat-nodemodules-is-not-the-only-way-mo2)
+ `commonstorage.googleapis.com` collection of [public test videos](https://gist.github.com/jsturgis/3b19447b304616f18657)
+ JSON collection of [`ISO` country codes](https://github.com/CoalaWeb/cw-country-iso-code/blob/master/src/cw-country-iso-code.json)

## math and logic

+ Mathematical Logic https://medium.com/brandons-computer-science-notes/mathematical-logic-f53f9c60d8d9
+ Knowledge Representation and Reasoning https://medium.com/brandons-computer-science-notes/knowledge-representation-and-reasoning-c7d441049715
+ NAND logic https://en.wikipedia.org/wiki/NAND_logic
+ (PDF) Sossinsky: Tolerance space theory and some applications https://www.researchgate.net/profile/Alexey_Sossinsky/publication/225214345_Tolerance_space_theory_and_some_applications/links/565ed2fc08aefe619b273973/Tolerance-space-theory-and-some-applications.pdf?origin=publication_detail
+ (PDF) Homology Theories and Tolerance Automata https://ac.els-cdn.com/0012365X81901679/1-s2.0-0012365X81901679-main.pdf?_tid=89c0f377-4f73-4b12-85fc-53c18db6f285&acdnat=1530513985_a462c37b7ccf50ce4c23cefe3ce71095
+ (PDF) Tolerance Automata http://www.kybernetika.cz/content/1967/3/223/paper.pdf
+ `bayes.js`, MCMC in the browser http://www.sumsar.net/blog/2015/12/bayes-js-a-small-library-for-doing-mcmc-in-the-browser/
+ MCMC and the case of the spilled seeds http://livefreeordichotomize.com/2017/10/14/mcmc-and-the-case-of-the-spilled-seeds/
+ Markov chain https://en.wikipedia.org/wiki/Markov_chain
+ Cellular automaton https://en.wikipedia.org/wiki/Cellular_automaton
+ Topology https://en.wikipedia.org/wiki/Topology

## Time, State, Transition

+ (PDF) Andreas Griewank on [**Automatic Differentiation**](https://pdfs.semanticscholar.org/cd99/031c8c91bffce3f364735224d6902c68c228.pdf)
    - (PDF) More about [*Automatic Differentiation*, Or mathemagically finding derivatives ](http://www.columbia.edu/~ahd2125/post/2015/12/5/) along iwth implementations in [`Rust`](https://github.com/alanhdu/explorations/tree/master/rust-autodiff) and [`Python`](https://github.com/alanhdu/explorations/tree/master/python-autodiff)
+ [**Precolation Theory**](https://en.wikipedia.org/wiki/Percolation_theory)
    - [**Percolation transition** in dynamical traffic network with evolving critical bottlenecks](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4311803/)
    - "the first study to consider geographically localized attacks from the perspective of percolation theory," [Localized attacks on spatially embedded networks with dependencies](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4355725/)
+ [Symbolic dynamics](https://en.wikipedia.org/wiki/Symbolic_dynamics) 
    - > In mathematics, symbolic dynamics is the practice of modeling a topological or smooth dynamical system by a discrete space consisting of infinite sequences of abstract symbols, each of which corresponds to a state of the system, with the dynamics (evolution) given by the shift operator.
+ [**Kripke structure**](https://en.wikipedia.org/wiki/Kripke_structure_(model_checking))
    - used in [**Model checking**](https://en.wikipedia.org/wiki/Model_checking)
    - variation of Transition System (see next), that can be representated as a graph whose nodes represent the reachable states of the system and whose edges represent state transitions
+ [Transition system](https://en.wikipedia.org/wiki/Transition_system) - differ from finite state automata in several ways:
    - The set of states is not necessarily finite, or even countable.
    - The set of transitions is not necessarily finite, or even countable.
    - No "start" state or "final" states are given.
+ [Reversible cellular automaton](https://en.wikipedia.org/wiki/Reversible_cellular_automaton)
    - >in which every configuration has a unique predecessor... a regular grid of cells, each containing a state drawn from a finite set of states, with a rule for updating all cells simultaneously based on the states of their neighbors, such that the previous state of any cell before an update can be determined uniquely from the updated states of all the cells
    + (PDF) Friedemann Mattern, [Virtual Time and Global States of Distributed Systems](https://www.vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf)
    - "Event structures," "Time slices," "Virtual time," "**Vector time**," "*Distributed debugging*"
+ Yoshua Wuyts, [**Managing State in Browser Applications**](https://www.yoshuawuyts.com/browser-state/)
    - includes [Vector Clock](https://en.wikipedia.org/wiki/Vector_clock)
    - vector clock [implementation in JS](https://github.com/mixu/vectorclock)
+ (PDF) Frank P. Ramsey, 1926, [Truth and probability](https://core.ac.uk/download/pdf/7048428.pdf)
    - more about the impressive [Frank Ramsey](https://en.wikipedia.org/wiki/Frank_P._Ramsey)
+ Oleksii Trekhleb, [**Dynamic Programming** vs Divide-and-Conquer](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
    - see also, Dynamic programming, implemented by [**memoization** or **tabulation**](https://programming.guide/dynamic-programming-vs-memoization-vs-tabulation.html)
+ (PDF) Richard Bellman, selections on [the birth of **dynamic programming**](http://www.cas.mcmaster.ca/~se3c03/journal_papers/dy_birth.pdf)
    - define [**dynamic programming**](https://en.wikipedia.org/wiki/Dynamic_programming)
    - mentioned by Peter Norvig with respect to Coders at Work, e.g., https://pindancing.blogspot.com/2009/09/sudoku-in-coders-at-work.html
    - [Constraint Propagation](https://en.wikipedia.org/wiki/Local_consistency)
    - [Recursive Search](https://en.wikipedia.org/wiki/Recursion#In_computer_science)
    - ["Curse of Dimensionality"](https://en.wikipedia.org/wiki/Curse_of_dimensionality)
+ Vaidehi Joshi, [Trying to Understand `Tries`](https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014)
+ [**Decision Tables**](https://en.wikipedia.org/wiki/Decision_table)
    - ...and from `Hillel Wayne`, ["For a decision table to be \"consistent\", all possible inputs must map to exactly one row."](https://www.hillelwayne.com/post/decision-tables/)
+ Uncle Bob on BDD [Gherkin triplets as state transition specifiers](http://blog.cleancoder.com/uncle-bob/2018/06/06/PickledState.html)
+ [Time Series](https://en.wikipedia.org/wiki/Time_series)
    - [Wiener filter](https://en.wikipedia.org/wiki/Norbert_Wiener#Wiener_filter)
    - [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter)
    - see also, from July 2016, [Kalman filter in JS](https://github.com/wouterbulten/kalmanjs)

## Objects vs. Data

+ Struct may be the "concept" after all, [When do you use a `struct` instead of a `class`?](https://softwareengineering.stackexchange.com/questions/92339/when-do-you-use-a-struct-instead-of-a-class/92369#92369)
+ Memory, [Strings are evil](https://medium.com/@indy_singh/strings-are-evil-a803d05e5ce3)
+ Speed, [**Fibonacci Hashing**: The Optimization that the World Forgot (or: a Better Alternative to Integer Modulo)](https://probablydance.com/2018/06/16/fibonacci-hashing-the-optimization-that-the-world-forgot-or-a-better-alternative-to-integer-modulo/)
+ How Alby [implemented **consistent hashing** efficiently](https://blog.ably.io/how-to-implement-consistent-hashing-efficiently-fe038d59fff2)

## HEX - SAM Pattern

+ Jean Jacques Dubray, [HEX, a no-framework approach](https://medium.com/@metapgmr/hex-a-no-framework-approach-to-building-modern-web-apps-e43f74190b9c)
+ Jean Jacques Dubray, [20 lines of Javascript that “hash” HTML](https://github.com/jdubray/sam-samples/blob/master/hash-dom/index.html)
+ [Javascript implementation of Java’s String.hashCode() method](http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)
+ Axel Rauschmeyer, [Exploring JS: template literals](http://exploringjs.com/es6/ch_template-literals.html)
    - see the `escapeHTML` section
