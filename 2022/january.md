# January 2022

## Pick of the Month

+ Andrea Giamarchi (2021), **Should you trust JavaScript execution?** &#8594; https://javascript.plainenglish.io/about-trusting-javascript-execution-8c6b478d6021
    - Shows how you can highjack every JavaScript `Builtin.prototype\[Symbol.iterator\]` to intercept authentication or other sensitive data easily.
    - Note: Two things not affected by this attack are `arguments` objects and function(...rest) parameters.
    - Shows how to guard against this problem using `bind`, `call`, `apply`, or his project, [proxy-pants](https://github.com/WebReflection/proxy-pants#readme).

## Against Gratuitous Complexity

Software is only complex as we choose to make it or refuse to mitigate it. Using "tools" that help solve a problem inevitably becomes its own next-level problem. 

+ *Unix Sheikh* (2021), **So-called modern web developers are the culprits** &#8594; https://unixsheikh.com/articles/so-called-modern-web-developers-are-the-culprits.html
  + Brutal rant against the "modern way" of developing web sites.  
  + See also (2021), **Using a framework can make you stupid** &#8594; https://unixsheikh.com/articles/using-a-framework-can-make-you-stupid.html
+ Romain Ruetschi (2021), **react-if** &#8594; https://github.com/romac/react-if
  + *sigh* JSX developers reinvent the JSTL wheel to handle conditional component rendering.
+ Travis Waith-Mair (2020), Stop Writing Reusable React Components &#8594; https://non-traditional.dev/stop-writing-reusable-react-components-bd649cba2700
  + More an argument in adopting *YAGNI* (you ain't gonna need it) when making components re-usable: most of the time your component won't be re-used.
+ Matthew Dean (2021), **Simplicity as a Feature** &#8594; https://dev.to/matthewdean/simplicity-as-a-feature-14be
  + Response to *Complexity is killing software developers* article, author considers the cost of developer-first features that eventually outweighs the benefits to developers, or users.
+ Jade Rubick (2021), **Great engineering teams focus on milestones instead of projects** &#8594; https://www.rubick.com/milestones-not-projects/
  + Prioritizing milestones over projects sharply reduces complexity (by reducing hard-and-fast planning) and increases team agility.
  > \[Milestones\] unlock project shaping, better handle exploration projects, encourage incremental design, improve teams, make engineering look good, and increase trust.
+ Tyler Hawkins (2021), **In defense of _Clean Code_: 100+ pieces of timeless advice from Uncle Bob** &#8594; https://dev.to/thawkin3/in-defense-of-clean-code-100-pieces-of-timeless-advice-from-uncle-bob-5flk

## Behavioral Programming

+ Jeremy W. Sherman (2012), **Behavioral Programming** &#8594; https://jeremywsherman.com/blog/2012/07/23/behavioral-programming/
    - One of the first - and enthusiastic - responses to the 2012 article by David Harel, Assaf Marron, and Gera Weiss on **Behavioral Programming** &#8594; https://cacm.acm.org/magazines/2012/7/151241-behavioral-programming/fulltext

## Combinators

+ Donnacha Oisín Kidney (2020), **Fun with Combinators** &#8594; https://doisinkidney.com/posts/2020-10-17-ski.html
    - Some implementation logic for lambda calculus with combinators
    - Bonus from Oisín (2019), **Solving Programming Puzzles without using your Brain** &#8594; https://doisinkidney.com/posts/2019-06-04-solving-puzzles-without-your-brain.html

## Flux pattern

+ Andrew Ray (2021), **The Mental Model That Helped Me Finally Understand "Flux"** &#8594; https://andrewray.me/blog/the-mental-model-that-helped-me-finally-understand-flux
    > This is what I wish someone had told me when I struggled learning Flux. It's not straightforward, not well documented, and has many moving parts.
    - Originally published 2014, updated and re-styled 2021, post describes one-way data flow pattern recommended in the early days of ReactJS. 
    - This was easier to follow in 2021, my having worked with both Redux.js and the SAM pattern.

## Generators 

+ Ryan De La Torre (2021), **Codepen: Generators as State Machines** &#8594; https://codepen.io/rgdelato/pen/vGNRqP
    - SAM-pattern friend shows skills with generator functions.

## Locally Testable Codes

+ Mordechai Rorvig (2021), **Researchers Defeat Randomness to Create Ideal Code** &#8594; https://www.quantamagazine.org/researchers-defeat-randomness-to-create-ideal-code-20211124/
    > By carefully constructing a multidimensional and well-connected graph, a team of researchers has finally created a long-sought locally testable code that can immediately betray whether it’s been corrupted.
    > To create an optimal method for encoding information, researchers represented it in a graph that takes the form of a richly interconnected web of booklets that explodes outward. Each square in the graph represents one single bit of information from a message.
    - Presentation by Irit Dinur (Weizmann Institute of Science) at UC Berkeley, (Oct. 2021), **Breakthroughs — Locally Testable Codes with Constant Rate, Distance, and Locality** &#8594; https://simons.berkeley.edu/events/breakthroughs-locally-testable-codes-constant-rate-distance-and-locality

## Formal Methods

### Model checking

+ Edmund M. Clarke, Jr. (undated), **Symbolic Model Checking with BDDs** &#8594; https://www.cs.cmu.edu/~emc/15-820A/reading/lecture_1.pdf
    - Early lecture by one of the originators of *symbolic model checking*, this using *binary decision diagrams*.
    - Home page for model checking at CMU's Specification and Verification Center &#8594; https://www.cs.cmu.edu/~modelcheck/
+ Hillel Wayne (2021), **Alloy 6: it's about Time** &#8594; https://hillelwayne.com/post/alloy6/
    - A short walk through Alloy's new built-in temporal operators.

### Property-based Testing

+ Tim Nelson, Elijah Rivera, Sam Soucie, Thomas Del Vecchio, Jack Wrenn, Shriram Krishnamurthi (2021), **Automated, Targeted Testing of Property-Based Testing Predicates** &#8594; https://cs.brown.edu/~sk/Publications/Papers/Published/nrsdwk-auto-targ-test-pbt-pred/
    - Wow! An actual study of PBT focusing how students learn PBT and where they struggle (reuirement of independent subproperties).
+ James Sinclair (2021), **How not to write property tests in JavaScript** &#8594; https://jrsinclair.com/articles/2021/how-not-to-write-property-tests-in-javascript/
    > How do we keep ourselves from over-specifying or writing unnecessary tests?
+ Nicolas Dubien (2021), **fast-check: how it works** &#8594; https://github.com/dubzzz/fast-check/blob/30d1d961c3adceed108d91912641125e78c25d26/documentation/HowItWorks.md
    - Sweet! Learn how to implement a simple property-based testing framework.

## UI Development

+ Chris Coyier (2021), **Fractional SVG stars** &#8594; https://css-tricks.com/fractional-svg-stars-with-css/
    - Styling SVG star rating systems with CSS `mix-blend-mode`...
+ Ben Myers (2021), **Form autocomplete** &#8594; https://12daysofweb.dev/2021/form-autocomplete/
    > Learn how to help users fill out forms more efficiently and accurately with autocomplete and virtual keyboard options.
+ Adrian Roselli (2021), **Under-engineered dependency questions** &#8594; https://adrianroselli.com/2021/12/under-engineered-dependency-questions.html
    - Basic HTML and CSS approach for radio groups in forms.
+ Jeb Beich (2017), "Restate your UI" Series
    + **Restate Your UI: Using State Machines to Simplify User Interface Development** &#8594; https://cognitect.com/blog/2017/5/22/restate-your-ui-using-state-machines-to-simplify-user-interface-development
    + **Restate Your UI: Creating a User Interface with Re-frame and State Machines** &#8594; https://cognitect.com/blog/2017/8/14/restate-your-ui-creating-a-user-interface-with-re-frame-and-state-machines

## UI Testing

Alister Scott (2021), **Playwright is better than Cypress** &#8594; https://alisterbscott.com/2021/10/27/five-reasons-why-playwright-is-better-than-cypress/
    - "Scripted playback tests" (AKA end-to-end tests) are hard to read at first and therefore hard to keep organized later. Alister gives 5 reasons (good ones) why using Playwright over Cypress solves these issues.

