# March 2020

## Accessibility

+ Adam B. Silver (2020), **The problem with snackbars and what to use instead** &#8594; https://adamsilver.io/articles/the-problem-with-snackbars-and-what-to-use-instead/
+ Greg Navis (2019), **The Architecture No One Needs** &#8594; https://www.gregnavis.com/articles/the-architecture-no-one-needs.html
  > why a single-page app is almost always worse than a multi-page app...
+ Web Accessibility Guidelines via The Studio at Carenegie Museums &#8594; http://web-accessibility.carnegiemuseums.org/
  - Extensive collection of accessibility guides here including
    - **Semantic HTML** &#8594; http://web-accessibility.carnegiemuseums.org/foundations/semantic/
    - **ARIA Roles, States & Properties** &#8594; http://web-accessibility.carnegiemuseums.org/foundations/aria/
    - **Keyboard** &#8594; http://web-accessibility.carnegiemuseums.org/foundations/keyboard/
    - **Contrast & Color** &#8594; http://web-accessibility.carnegiemuseums.org/design/color/
    - **Modals (Dialog Windows)** &#8594; http://web-accessibility.carnegiemuseums.org/code/dialogs/
    - and others&hellip;
    
## CSS

+ Trys Mudford (2020), **Currying in CSS?** &#8594; https://www.trysmudford.com/blog/currying-in-css/
+ Gallagher Website Design (blog, date unknown), **Remove `<br>` Line Break with CSS and Replace with Space** &#8594; https://www.gallagherwebsitedesign.com/blog/remove-line-break-css-replace-with-space/
  - Sure came in handy
+ Louis Hoebregts (2018), **The trick to viewport units on mobile** &#8594; https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  - and why mobile browser vendors do not define viewport units reliably
+ Sergey Chikuyonok (2016), **CSS GPU Animation: Doing It Right** &#8594; https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
  - animate with `transform` instead of `left` so that the animation is no longer bound to the CPU - and doesn't cause reflow calculations (too many cause iOS Safari to crash)
+ Keir Watson (2020), **Responsive grid layout in 20 lines of CSS** &#8594; https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/

## HTML

+ Barry Pollard (2020), **Setting Height And Width On Images Is Important Again** &#8594 https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
+ Scott Vinkle (2020), **How Does HTML Microdata Help With Accessibility?** &#8594; https://scottvinkle.me/blogs/blog/how-html-microdata-helps-with-accessibility
+ Robin Rendle (2017), **An Idea for a Simple Responsive Spreadsheet** &#8594; https://css-tricks.com/idea-simple-responsive-spreadsheet/
+ Chris Coyier (2020), **A Complete Guide to Links and Buttons** &#8594; https://css-tricks.com/a-complete-guide-to-links-and-buttons/
+ Dudley Storey (2017), **Making and Deploying SVG favicons** &#8594; http://thenewcode.com/28/Making-And-Deploying-SVG-Favicons
  - one of the co-authors of Using SVG with CSS3 and HTML5 &#8594; http://shop.oreilly.com/product/0636920037972.do

## JavaScript

+ Nguyen Huu Phuoc (2020), **how to manage HTML DOM with native API only?** &#8594; https://htmldom.dev/
+ Estefanía García Gallardo (2019), **The Art of Refactoring: 5 Tips to Write Better Code** &#8594; https://medium.com/better-programming/the-art-of-refactoring-5-tips-to-write-better-code-3bc1f6f7689
+ Tania Rascia (2020), **Understanding Generators in JavaScript** &#8594; https://www.taniarascia.com/understanding-generators-in-javascript/
+ Andrea Grammarchi (2020), **`udomdiff`: An essential diffing algorithm for µhtml** &#8594; https://github.com/WebReflection/udomdiff
+ Lennard Schutter (2019), *nice stackoverflow answer to, **How to parameterize mocha tests "@theory" style?*** &#8594; https://stackoverflow.com/a/54245338
+ Kent C. Dodds (2019), **"React is all you need to manage application state"** &#8594; https://kentcdodds.com/blog/application-state-management-with-react
+ Fiona Hopkins (2018), **Deciphering TypeScript’s React errors** &#8594; https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402
  - I hate React, but I *really* hate TypeScript; favoring types over tests solves nothing.
+ Steve Ruiz (2020), **Using a JavaScript library (without type declarations) in a TypeScript project** &#8594; https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3
  - Because, of course, who would want that? A library without typescript declarations...
+ Josh W. Comeau (2020), **The Perils of Rehydration**: An Eye-Opening Realization about Gatsby and React &#8594; https://joshwcomeau.com/react/the-perils-of-rehydration#the-solution
  - I also hate Gatsby; *it is not a "static site generator" but a SPA generator*; its reliance on React breaks dynamic vanilla JavaScript loading so you have to use `dangerouslySetInnerHtml()`; fanboyz are only lately admitting this, now that the Gatsby team has decided to take the VC money; the predictable result will be yet another Frankenstein framework/app.

## Testing

+ Gleb Bahmutov (2019), **Stop using Page Objects and Start using App Actions** &#8594;  https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/#page-objects-problems
+ Robert Pearce (2020), **Catch Low-Hanging Accessibility Fruit with axe-core** &#8594; https://robertwpearce.com/catch-low-hanging-accessibility-fruit-with-axe-core.html
  - includes react- and jest-specific stuff, too.
+ `QA Wolf`, **Create browser tests 10x faster** &#8594; https://github.com/qawolf/qawolf#qa-wolf
+ Benjamin Cabanes (2018), **Marble testing Observable Introduction** &#8594; https://medium.com/@bencabanes/marble-testing-observable-introduction-1f5ad39231c
+ Kevin Kreuzer (2018), **Findings about RxJS marble testing and the TestScheduler** &#8594; https://itnext.io/findings-about-rxjs-marble-testing-and-the-testscheduler-b23c6bdf6b49
