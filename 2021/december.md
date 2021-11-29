# December 2021

## Major Alloy 6 release!

+ alloytools.org (2021), **Alloy 6 released** &#8594; https://alloytools.org/alloy6.html
    + *Major new version with temporal logic support, including:*
        + Mutable signatures and fields
        + Value of an expression in the next state
        + Instances are now infinite sequences of states (traces)
        + Time horizon
        + Complete model-checking

## Find of the month

*Three* posts merit mention this month.

1. Pavel Panchekha and Chris Harrelson (2021), \[Online Book] **Web Browser Engineering** &#8594; https://browser.engineering/
    + Web browser complete, in a thousand lines of Python.
2. Bruno Sutic (2021), **Async Ruby** &#8594; https://brunosutic.com/blog/async-ruby
    + Doesn't work with Rails yet (November 2021), but I haven't been so jealous of Ruby in a long time (maybe since before using it at Cal Berkeley).
3. Svyatoslav Kryukov, Travis Turner (2021), **A no-go fantasy: writing Go in Ruby with Ruby Next** &#8594; https://evilmartians.com/chronicles/a-no-go-fantasy-writing-go-in-ruby-with-ruby-next
    + Show off piece demonstrates how to use [Ruby Next](https://github.com/ruby-next/ruby-next) to add interesting capabilities to Ruby.
   
## Types

+ François Lamontagne (2007), **Ruby is dynamically *and* strongly typed** &#8594; http://www.rubyfleebie.com/2007/07/09/ruby-is-dynamically-and-strongly-typed/
  + Good rundown on dynamic vs. static, and strong vs. weak types.
  + > A **dynamically** typed language is a language where the type of a variable can be altered at any time. (It is a string, now it is a Fixnum, now it is a Time object, etc.)
  + > A **statically** typed language is the opposite. (Decide what x is once for all and don’t change your mind!)
  + > A **strongly** typed language is a language that is being strict about what you can do with your typed variables. (Don’t mix them… or I will throw you an error in the face!)
  + > A **weakly** typed language is the opposite. (Do what you want with your different types. Mix them all! We’ll see what happens!)


## Algorithms

+ stackoverflow (2011), **"Explain Morris inorder tree traversal without using stacks or recursion"** &#8594; https://stackoverflow.com/questions/5502916/explain-morris-inorder-tree-traversal-without-using-stacks-or-recursion
  + Lots of answers
  + Another implementation at geeksforgeeks.org &#8594; https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/
+ Andrew Ray (2014: updated 2021), **The Mental Model That Helped Me Finally Understand "Flux"** &#8594; https://andrewray.me/blog/the-mental-model-that-helped-me-finally-understand-flux
    > This is what I wish someone had told me when I struggled learning Flux. It's not straightforward, not well documented, and has many moving parts.

## SAM and Other Design Patterns

+ Achim Schneider (2021), **The SAM Pattern** &#8594; https://codingconnects.com/sam-pattern
    > The SAM Pattern as an alternative approach to widely adopted Frontend architectures. I show how to implement a simple browser game with this pattern.
+ Adrian Mos (2021), **User-Interfacing Software Design Patterns, Revisited** &#8594; https://medium.com/codex/user-interfacing-software-design-patterns-revisited-2ac1dcfd445d
    > We will look at MVC (model-view-controller), MVVM (model-view-viewmodel), **SAM (state-action-model)** and CQRS (command-query responsibility segregation), with the BFF (backend for frontend) 'anti'-pattern.

## HTML

+ Manuel Matuzović (2021), **HTML Hell, Issue #16 - Landmarks** &#8594; https://www.htmhell.dev/tips/landmarks/
    > HTML allows us to define so-called landmarks, important areas in a page. They can be really helpful, especially for screen reader users.
+ Fredrik Holmquist (2021), **Static Websites** &#8594; https://www.fredrikholmqvist.com/posts/static-websites/
    > It’s always easy to add complexity, it is substantially harder to remove it.

## JavaScript and TypeScript

+ Kailash Nadh (2021), **The Javascript "ecosystem" is a hot mess and so is software development in general** &#8594; https://nadh.in/blog/javascript-ecosystem-software-development-are-a-hot-mess/
    > I cannot recollect any language’s ecosystem getting "modernized" like this, becoming this comically complicated that one might think it’s parody. Of course, the symptoms were evident with left-pad.
+ Wiktor Toporek (2021), **It's not JavaScript's ugly cousin. See how Typescript improves Developer Experience** &#8594; https://tsh.io/blog/typescript-improves-developer-experience/
  + Questionable ReactJS-centric *state-combinations-are-harder-to-test-exhaustively* claims that equate "improving the developer experience" with "instant (visible) feedback" - consider the ableism in that phrase.

## Data Structures

+ Anish Kumar (2021), **Trie in Javascript: the Data Structure behind Autocomplete** &#8594; https://stackfull.dev/trie-in-javascript-the-data-structure-behind-autocomplete
  + *Nice implementation and walk-through.*
+ Phil Eaton (2021), **Writing an efficient object previewer for JavaScript** &#8594; https://datastation.multiprocess.io/blog/2021-07-15-writing-an-efficient-javascript-object-previewer.html

## Models and model checking

+ Adam Zewe (2021), **Making Data Visualizations More Accessible** &#8594; https://news.mit.edu/2021/data-visualizations-accessible-blind-1012
  + Study starts with a chart, adds title, alt-text, and interpretive treatments. *Of course they're surprised by the results.*
    > Survey results revealed that a majority of blind readers were emphatic that descriptions should not contain an author’s editorialization, but rather stick to straight facts about the data. On the other hand, most sighted readers preferred a description that told a story about the data.
+ Daniel L. Moody (2009), **The “Physics” of Notations: Toward a Scientific Basis for Constructing Visual Notations in Software Engineering** &#8594; \[pdf] https://cs.uwaterloo.ca/~jmatlee/Teaching/CS846/Schedule/Jan30/Kevin.pdf
+ Ashton Wiersdorf (2021), **Models of Programming** &#8594; https://lambdaland.org/posts/2021-09-25_models_of_programming_draft2/
    >  I think the best way to start out thinking about programming is by considering how to model problem domains as best as possible, and functional languages give you the most and best tools to do that with.
+ Thomas Ball, Sriram K. Rajamani \[PDF], **Checking Temporal Properties of Software with Boolean Programs** &#8594; https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=74F9FE59EAFF8AEE833E128AF1238923?doi=10.1.1.462.8917&rep=rep1&type=pdf
+ Thomas Ball, Sriram K. Rajamani \[presentation], **Rule Checking: SLAM: Checking Temporal Properties of Software** &#8594; https://slidetodoc.com/rule-checking-slam-checking-temporal-properties-of-software/
+ Alex Weisberger (2021), **Misspecification: The Blind Spot of Formal Verification** &#8594; https://concerningquality.com/misspecification/
     > Misspecification is the omission or misstatement of an important behavior or property such that a program can be verified to fully meet its spec, but the spec permits undesirable behavior.
+ Amazon Science (2021), **Using Lightweight Formal Methods to Validate a Key-Value Storage Node in Amazon S3** &#8594; \[pdf] https://assets.amazon.science/07/6c/81bfc2c243249a8b8b65cc2135e4/using-lightweight-formal-methods-to-validate-a-key-value-storage-node-in-amazon-s3.pdf
    > Implementing the reference model as executable code is a design choice. We could instead have used a language intended for modeling (Alloy [23], Promela [22], P [12], etc.), which would have given us better expressiveness and built-in checking tools. However, we found that by writing reference models in the same language as the implementation, we make them easier for engineers to keep up to date. We also minimize the cognitive burden of learning a new language and mapping concepts between model and implementation.
    > Writing reference models in the implementation language means we can also use them as mocks during unit testing.

