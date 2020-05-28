# May 2020

+ *coming soon eventually...*

## section

+ author (date), **title** &#8594; link

## JavaScript & Framework Performance, a timeline

+ John Bender (2014), **Researching the Performance costs of JavaScript MVC Frameworks** &#8594; https://www.filamentgroup.com/lab/mv-initial-load-times.html
  - Compares Backbone, Angular, and Ember (which fares worst here)... plus React 0.12.2 which performs as well as Backbone. 
+ Paul Lewis (2015), **React plus Performance equals What?** &#8594; https://aerotwist.com/blog/react-plus-performance-equals-what/
  - "For mobile there’s a remarkable cost to using React over not doing so, and the cost is so high as to be reasonably prohibitive."
+ Paul Lewis (2015), **The Cost of Frameworks** &#8594; https://aerotwist.com/blog/the-cost-of-frameworks/
  - Tries to generalize the "particular costs that are unique to frameworks," such as "a pretty hefty tax to using Frameworks on mobile, especially compared to writing vanilla JavaScript."
+ Alex Russell (2017), **Can You Afford It?: Real-world Web Performance Budgets** &#8594; https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/
  - Alex's tweet from 4 September, 2020: "`"`Modern`"` frontend development as practices in the React/Redux/JS-all-the-things style is a disaster. Everything designed to fix your last mistake instead makes it worse."
 &#8594; https://twitter.com/slightlylate/status/1037108595551297536
+ Addy Osmani (2018), **The Cost Of JavaScript In 2018** &#8594; https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4
+ Addy Osmani (2019), **The Cost Of JavaScript In 2019** &#8594; https://v8.dev/blog/cost-of-javascript-2019
+ CP Clermont (2020), **The Impact of Web Performance** &#8594; https://simplified.dev/performance/impact-of-web-performance
  - "On mobile, per session, users who experienced **fast rendering times** bring 75% more revenue than average and **327% more revenue** than slow."
  - "On desktop, per session, users who experienced **fast rendering times** bring 212% more revenue than average and **572% more revenue** than slow."
  - See the "How did we do it" section (added more code to defer and batch processing) which sounds suspiciously like Alex Russell's complaint o 4 September &#8594; https://twitter.com/slightlylate/status/1037108595551297536
+ Tim Kadlec (2020), **The Cost of JavaScript _Frameworks_** &#8594; https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/
  - In 2015, React (0.12.2) was as fast as Backbone. In 2020, React has become by far the worst performer, especially as the total app size grows.
  - Should revisit this advice from Christopher Chedeau (2013), **React’s diff algorithm** &#8594; https://calendar.perfplanet.com/2013/diff/
    - > The performance cost model of React is also very simple to understand: every setState re-renders the whole sub-tree. If you want to squeeze out performance, call `setState` as low as possible and use `shouldComponentUpdate` to prevent re-rendering an [sic] large sub-tree. 

## Testing

+ Cal Paterson (2020), **The argument against clearing the database between tests** &#8594; http://calpaterson.com/against-database-teardown.html
  > I'm of the school of thought that most useful "unit"1 tests should involve the database. Consequently I don't mock out, fake or stub the database in tests that I write... You can't write tests that assume that data it has created is the only thing present... Instead each test needs to be written to assert only on the basis of data it has created (or has not created). It should handle data created by others.
+ Angie Jones (2019), **Verifying Entire Api Responses _(with Approval Testing)_** &#8594; http://angiejones.tech/verifying-entire-api-responses/

## CSS

+ Aaron Iker (2020), **Custom Styling Form Inputs With Modern CSS Features** &#8594; https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/
+ Fabian Salathe (2017, ongoing), **`Gutenberg`: Modern framework to print the web correctly.** &#8594; https://github.com/BafS/Gutenberg
+ **Minimal CSS Using Semantic HTML**
  + Andy Brewer (2020), **`MVP.css` — Minimalist stylesheet for HTML elements** &#8594; https://andybrewer.github.io/mvp/
  + Igor Adamenko (2019), **`awsm.css` - Simple CSS library for semantic HTML markup** &#8594; https://igoradamenko.github.io/awsm.css/
  + See more of these via Chris Coyier (2020), *No-Class CSS Frameworks* &#8594; https://css-tricks.com/no-class-css-frameworks/
+ Ollie Williams (2020), **Styling in the Shadow DOM With CSS Shadow Parts** &#8594; https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/

## Conflict-free Replicated Data Types

+ **crdt.tech** &#8594; https://crdt.tech/
  > A Conflict-free Replicated Data Type (CRDT) is a data structure that simplifies distributed data storage systems and multi-user applications.
  
## Kafka

+ Ranvir Singh (2018), **The Ultimate Introduction to Kafka with JavaScript** &#8594; https://blog.soshace.com/the-ultimate-introduction-to-kafka-with-javascript/
+ Manuel Villing (2018), **Event sourcing with kafka and nodejs** &#8594; https://medium.com/@theotow/event-sourcing-with-kafka-and-nodejs-9787a8e47716
+ Matt Walters (2019), **`sourced` - Tiny framework for building models with the event sourcing pattern (events and snapshots)** &#8594; https://github.com/mateodelnorte/sourced
+ Túlio Ornelas (2019), **`kafkajs` - Apache Kafka client for node.js** &#8594; https://github.com/tulios/kafkajs
+ Joseph Rea (2019), **Consuming Messages Out of Apache Kafka in a Browser** &#8594; https://www.confluent.io/blog/consuming-messages-out-of-apache-kafka-in-a-browser/

## React in 33 lines

+ Oliver Russell (2020), **33 line React** &#8594; https://leontrolski.github.io/33-line-react.html
+ **Hacker news discussion** &#8594; https://news.ycombinator.com/item?id=22776753
+ Oliver Russell (2020), **Follow-up** &#8594; https://leontrolski.github.io/33-line-react-thoughts.html

## State Transitions

+ Karl Wiegers (2020), **Modeling System States: State-Transition Diagrams and State Tables** &#8594;  https://medium.com/@karlwiegers/modeling-system-states-state-transition-diagrams-and-state-tables-d37fe908ff23
+ Mermaid-js, **Mermaid JS State Diagrams** &#8594; https://mermaid-js.github.io/mermaid/#/stateDiagram
  + **Mermaid Live Editor** &#8594; https://mermaid-js.github.io/mermaid-live-editor/
