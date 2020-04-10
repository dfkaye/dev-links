# April 2020

+ *coming soon eventually...*

## section

+ author (date), **title** &#8594; link

## Energy-efficient Industry and Practice 

+ Andrea Giammarchi aka @webreflection, **basicHTML**: node.js DOM implementation &#8594; https://github.com/WebReflection/basicHTML
+ Excalidraw Blog (2020), **Rethinking Virtual Whiteboard** &#8594; https://blog.excalidraw.com/rethinking-virtual-whiteboard/
  - whiteboarding-from-home in the post-*coronavirus* era
+ Danny van Kooten (2019), **Website Carbon Emissions** &#8594; https://dannyvankooten.com/website-carbon-emissions/
  - > I reduced global emissions by an estimated 59.000 kg CO2 per month by removing a 20 kB JavaScript dependency
  - > Shaving off a single kilobyte in a file that is being loaded on 2 million websites reduces CO2 emissions by an estimated 2950 kg per month.
+ Kev Quirk (2020), **Making a Website** &#8594; https://kevq.uk/making-a-website/
  - Series of posts on making an efficient web site; download all the resources at &#8594; https://mylight.website/downloads.html
+ Tiny Helpers (2020), **A collection of free single-purpose online tools for web developers...** &#8594; https://tiny-helpers.dev/
+ Nguyen Huu Phuoc (2020), **how to manage HTML DOM with vanilla JavaScript only?** &#8594; https://htmldom.dev/
+ Dmitri Pavlutin (2020), **How To Setup Your Local React Playground** &#8594; https://dmitripavlutin.com/react-playground-setup/
+ Richard Torruellas (2019), **TypeScript without TypeScript** &#8594; https://www.rtorr.com/typescript-without-typescript/
  - Reduce read-time confusion and build-time dependencies: put types in comments, not in the source.
+ Pedro Tacla Yamada (2015, ongoing), **JSDocTest** &#8594; https://yamadapc.github.io/jsdoctest/
  - > Run jsdoc examples as doctests. Inspired by the doctest python library, as well as its doctestjs javascript implementation.
+ Nicolas Dubien (2019, ongoing), **fast-check** &#8594; https://github.com/dubzzz/fast-check
  - > Property based testing framework for JavaScript (like QuickCheck) written in TypeScript
+ Magnus Hovland Hoff (2020), **Writing dependency-free JavaScript** &#8594; https://magnushoff.com/blog/dependency-free-javascript/
  - Good walk-through of replicating React/Redux without dependencies (like the "React in a few lines of jQuery" article from 2015). Sections:
    1. *Create the DOM up front*
    1. *Centralize rendering*
    1. Keep the compile step
    1. The DOM object
    1. *Keep state in the DOM*
    1. Cheat
    1. Redux
+ @Ak1T4 (2020), **Hunting Good Bugs with only `<HTML>`** &#8594; https://medium.com/@know.0nix/hunting-good-bugs-with-only-html-d8fd40d17b38
  - Prevent `<meta http-equiv>` injections with `Content-Security-Policy: http-equiv 'self'`
  - Prevent iframe navigation (top.location) attacks with `<iframe sandbox=’allow-scripts’>`
  - The rest is confusing, and in bad English.
+ Phil Nash (2020), **HTML attributes to improve your users' two factor authentication experience** &#8594; https://www.twilio.com/blog/html-attributes-two-factor-authentication-autocomplete
  - Numeric text input: not `type="number"`, but `inputmode="numeric"` and `pattern="[0-9]*"`
  - Help the browser suggest two-factor auth with `autocomplete="one-time-code"`
  - Sign-up forms with `autocomplete="email"` and `autocomplete="new-password"`
+ Bruce Lawson (2020), **Why You Should Choose HTML5 `<article>` Over `<section>`** &#8594; https://www.smashingmagazine.com/2020/01/html5-article-section/
  - *TL:DR*: Combine `<article>` with microdata, keep using `<h1>` through `<h6>`, and don't bother with `<section>`.
+ Kory Tegman (2020), **Design Better Code Through Better Function Signatures** &#8594; https://medium.com/@koryteg/function-signatures-796189836831
+ Dan Shilov (2020), **Design for progress over perfection** &#8594; https://uxdesign.cc/design-for-progress-over-perfection-ff0e885a3112
+ Maria Antonietta Perna (2020), **Five Ways to Lazy Load Images for Better Website Performance** &#8594; https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/
+ Oliver Russell (2020), **33 line React-like library** &#8594; https://leontrolski.github.io/33-line-react.html
+ React For Designers (2020), **React Mental Models: Working With `<input>`** &#8594; https://learnreact.design/2020/03/31/react-mental-models-working-with-input
+ Sam Denty (2020), **A GraphQL client without queries ✨** &#8594; https://github.com/samdenty/gqless
  > A #GraphQL utility building queries based on the data fetched by #React components at runtime. You no longer need to write GraphQL queries by hand, the library's JIT compiler does it for you.
+ Albert Gao (2020), **Setup Monorepo via Yarn workspace for Serverless Framework and Expo with Typescript** &#8594; https://www.albertgao.xyz/2020/04/10/setup-monorepo-via-yarn-workspace-for-serverless-framework-and-expo-with-typescript/
  - monorepo using `yarn`, `expo`, and `tsdx` *without* `lerna` *OR* `babel`
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link


## State Transitions

+ Karl Wiegers (2020), **Modeling System States: State-Transition Diagrams and State Tables** &#8594;  https://medium.com/@karlwiegers/modeling-system-states-state-transition-diagrams-and-state-tables-d37fe908ff23
+ Mermaid-js, **Mermaid JS State Diagrams** &#8594; https://mermaid-js.github.io/mermaid/#/stateDiagram
  + **Mermaid Live Editor** &#8594; https://mermaid-js.github.io/mermaid-live-editor/
  
## Complaints

+ Vasilis van Gemert (2013), **Why I Dislike the `rem` unit** &#8594; https://vasilis.nl/nerd/dislike-rem-unit/
  - may be dated
  - notes that `rem` is buggy, inflexible
  - `em` is better,
  - setting `html { font-size: 0.75em; }` is better
+ Umer Mansoor (2017), **YAGNI, Cargo Cult and Overengineering** &#8594; https://codeahoy.com/2017/08/19/yagni-cargo-cult-and-overengineering-the-planes-wont-land-just-because-you-built-a-runway-in-your-backyard/
  - > the Planes Won't Land Just Because You Built a Runway in Your Backyard
  - > We had built a Formula One race car, that makes frequent pit-stops and requires very specialized maintenance, when we needed a Toyota Corolla that goes on for years and years on just the oil change.
  - *Focus on the problem first, not the solution. Don’t pick any tool until you have fully understood what you are trying to achieve or solve. Don’t give up solving the actual problem and make it all about learning and using the shiny new tech.*
  - *Keep it simple. It’s an over-used term, but software developers still just don’t get it. Keep. It. Simple.*
  - and many more&hellip;
+ Richard Minerich (5 March, 2020), **The programming world is in a dismal state** &#8594; https://twitter.com/rickasaurus/status/1235574719035756545
  1. Harder every year to build quality software
  1. New tools give up front speed over maintainability
  1. Dependency management is out of control
  1. LTS periods are getting shorter
  1. The best tech is fringe
  1. Marketing driven adoption
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link
+ author (date), **title** &#8594; link



