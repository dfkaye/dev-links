# February 2022

## Pick of the Month

+ Robert Thompson (2020), **Javascript RORO pattern** &#8594; https://www.tinyblog.dev/blog/2020-07-13-javascript-roro-pattern/
    - "Receive an Object, Return an Object", an object-parameters-only pattern for JavaScript functions.
    - Object parameter fields are named and can be assigned default values in the function signature.
    - Returning an object means never returning primitives or null or undefined.
    - Returned objects can be destructured by the caller.
    - All well-supported by ES6 without requiring TypeScript.

## Formal methods

Continuing the theme from [January 2022](https://github.com/dfkaye/dev-links/blob/6659ab1c42c87949884f9ae4220075818fde5a18/2022/january.md#formal-methods).

### Model Checking

+ Edmund M. Clarke, Jr. (unk), **Lecture1: Symbolic Model Checking with BDDs** \[PDF\] &#8594; https://www.cs.cmu.edu/~emc/15-820A/reading/lecture_1.pdf
    - Edmund Clarke's slides from Carnegie Mellon course on&hellip; *Model Checking*.
    - More at https://www.cs.cmu.edu/~emc/research_interests.html.

### Property Based Testing

+ Nicolas Dubien (2018), **Introduction to Property Based Testing** &#8594; https://medium.com/criteo-engineering/introduction-to-property-based-testing-f5236229d237
    - PBT (especially the concept of "shrinking") explained by the originator of [fast-check](https://github.com/dubzzz/fast-check), a PBT library for JavaScript.
    > It is also important to note that it does not — *by any means* — replace unit testing. It only provides an additional layer of tests that might prove very efficient to reduce some boilerplate tests

## Empirical Testing

+ Daniel Lemire (2022), **How programmers make sure that their software is correct** &#8594; https://lemire.me/blog/2022/01/03/how-programmers-make-sure-that-their-software-is-correct/
    - *The* counter-argument to the dream of proving program correctness by exercising mathematical logic.
    - Lemire focuses on unit and integration tests as the main types programmers use to verify their work is correct.
    > It is impractical to apply such a mathematical method on a large scale. Errors can take many forms, and not all of these errors can be concisely presented in mathematical form. Even when it is possible, even when we can accurately represent the problem in a mathematical form, there is no reason to believe that a tool like z3 will always be able to find a solution: when problems become difficult, computational times can become very long. An empirical approach is more appropriate in general.
+ Cal Paterson (2020), **The argument against clearing the database between tests** &#8594; https://calpaterson.com/against-database-teardown.html
    - I've read a version of this argument before, that leaving the database in a dirty state after a test is actually helpful when the test is failing, and that clean up should happen only if there are no failing tests and/or only before a specific test that requires a clean database.
    - This version is the argument that your database will never be clean and should still function with all that additional data.

## Table Oriented Programming

+ (2002), **Summary of Primary Table-Oriented programming Concepts** &#8594; https://www.oocities.org/tablizer/top.htm
    - Now archived, this polemic against object-oriented programming in favor of clear separation between algorithms and data, and exploit relations and relational mapping.


## Languages Can't Do Everything

+ **_Jussive_ mood** http://latindiscussion.com/forum/threads/subjunctive-uses.33318/
    - A logic of specification, or "how something should happen or not", depends on the *jussive* mood.
    - Could follow in the manner of numerous small tomes on the logic of commands, plurality, questions and answers, time, etc.
+ **Practical Markup Language (PML)** &#8594; https://www.pml-lang.dev/about/faq.html
    - Read Christian Neumanns' PML manifesto (2019), **We Need a New Document Markup Language - Here is Why** &#8594; https://www.pml-lang.dev/docs/articles/practical-document-markup-language/index.html
+ Ryan Carniato (2021), **The Quest for ReactiveScript ** &#8594; https://dev.to/this-is-learning/the-quest-for-reactivescript-3ka3
    - member of the markoJS team speculates on *reactivity as general purpose language*.
+ **The Io language** &#8594; https://iolanguage.org
    >  Io is a programming language focused on expressiveness through simplicity.
    - Io is both object-oriented (all values are objects, so are assignments) and prototype-based.
+ Leslie Lamport (2018), **If you’re not writing a program, don’t use a programming language** \[PDF\] &#8594; http://bulletin.eatcs.org/index.php/beatcs/article/view/539

