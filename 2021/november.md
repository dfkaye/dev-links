# November 2021

## Path vs. Insight problems

+ Herbert L. Roitblat (2021), **AI Is No Match for the Quirks of Human Intelligence** &#8594; https://thereader.mitpress.mit.edu/ai-insight-problems-quirks-human-intelligence/
  + Discusses the distinction between **path problems** and **insight problems**.
  + > In path problems, the solver is given a representation, which includes a starting state, a goal state, and a set of tools or operators that can be applied to move through the representation. In insight problems, the solver is given none of these.
  + > With path problems, the solver can usually assess how close the current state of the system is to the goal state. Most machine learning algorithms depend on this assessment. With insight problems, it is often difficult to determine whether any progress at all has been made until the problem is essentially solved.
  + > Insight problems are typically posed in such a way that there are multiple ways that they could be represented. 
  + > The main barrier to solving problems like this is to abandon the default representation and adopt a more productive one. Once the alternative representation is identified, the rest of the problem-solving process may be very rapid. Laboratory versions of insight problems generally do not require any specific deep technical knowledge. Most of them can be solved by gaining one or two insights that change the nature of how the solver thinks about the problem.

## Algorithms

+ Bouke van der Bijl (2021), **Spreadsheet Formulas for Personal Finance** &#8594; https://bou.ke/blog/formulas/
+ Yonatan Kra (2021), **How To Find A Unique Number In A List Of Pairs?** &#8594; https://yonatankra.com/how-to-find-a-unique-number-in-a-list-of-pairs/
  + Scroll down to the section, *How to Use Bitwise XOR to find a unique value in a list of pairs in linear time?*  
+ Bartosz Sypytkowski (2021), **Deep dive into Yrs architecture** &#8594; https://bartoszsypytkowski.com/yrs-architecture/
  > CRDT library used for building collaborative peer-to-peer applications

## Behavioral programming

+ David Harel, Guy Katz, Rami Marelly, and Assaf Marron (2016), **First Steps Towards a Wise Development Environment for Behavioral Models** &#8594; https://www.wisdom.weizmann.ac.il/~harel/papers/First%20Steps%20WDE.pdf (PDF)
+ David Harel, Robby Lampert, Assaf Marron, and Gera Weiss (2014), **Model-Checking Behavioral Programs** &#8594; https://www.wisdom.weizmann.ac.il/~harel/papers/Model%20checking%20BP.pdf (PDF)

## Design

+ Jay Perlman (2021), **Doodle Ipsum: A New Illustration Tool for Developers** &#8594; https://blush.design/blog/post/doodle-ipsum-tool-for-developers
  > A Lorem Ipsum tool for placeholder illustrations
+ Mark Steadman (2021), **A Tangled Web of ARIA** &#8594; https://dev.to/steady5063/a-tangled-web-of-aria-50nk
  + ARIA-first development is an anti-pattern, not as maintainable as using semantic HTML, can override native semantics, and is not fully supported by all assistive technologies anyway.
+ Jeff Muller (2020), **Stop Testing Design Candidates** &#8594; https://uxdesign.cc/stop-testing-design-candidates-c5c4e66a548f
  > I can teach a designer a new approach. I can’t teach them not to be an asshole. Hire people you would enjoy spending a big part of your life with.

## Patterns

+ Nasi Jofche (2019), **Using the Command Pattern** &#8594; https://betterprogramming.pub/utilizing-the-command-pattern-to-support-undo-redo-and-history-of-operations-b28fa9d58910
> To support undo, redo, and history of operations
+ *leastbad* (2020), **Mutation-First Development: A Call to Action** &#8594; https://leastbad.com/mutation-first-development
  1. Developers should create or update libraries and their documentation to assume re-entrancy by default.
  2. A library is not considered high-quality unless it is idempotent. Developers should be able to initialize and destroy an instance many times during a single browser page context, including releasing event handlers and cleaning up/preparing the DOM state for caching during an unload event.
  3. The most celebrated libraries will be atomic, making as few assumptions about DOM structure or CSS framework as possible while allowing several simultaneous instances of the library on a page.

## Anti-patterns

+ Jake Archibald (2021), **Don't use functions as callbacks unless they're designed for it** &#8594; https://jakearchibald.com/2021/function-callback-risks/
  > TypeScript doesn't solve this
+ Chuánqí Sun (2021), **The vanishing designer** &#8594; https://uxdesign.cc/the-vanishing-designer-6d3d999f9540
  > UX design in the age of <del>destruction</del> <ins>standardization</ins>.
+ Chuánqí Sun (2018), **Are you experiencing the Kessler Syndrome?** &#8594; https://uxdesign.cc/are-you-experiencing-the-kessler-syndrome-23bab3cdd446
  + Describes the front-end ecosystem as the Low Earth orbit polluted to the point of impenetrability by space debris endlessly colliding and creating more space debris.
+ Dillon Shook (2020), **A Critique of React Hooks** &#8594; https://dillonshook.com/a-critique-of-react-hooks/

## DOM

+ Jack Jey (2021), **Safe DOM manipulation with the Sanitizer API** &#8594; https://web.dev/sanitizer/

## JSDoc for TypeScript (again)

+ Valérian Galliat (2021), **JSDoc: TypeScript inside JavaScript and not the other way around** &#8594; https://www.codejam.info/2021/10/jsdoc-typescript-inside-javascript.html


## Privacy

+ Privacy Guides (2021), **The guide to restoring your online privacy.** &#8594; https://privacyguides.org/

