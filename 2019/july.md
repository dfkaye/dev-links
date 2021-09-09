# July 2019 

## SAM Pattern

+ Lightweight framework for the SAM pattern - https://github.com/sam-js/sam
  
# Auth

+ Santiago Quinteros (@santypk4), **You Don't Need Passport.js** - https://softwareontheroad.com/nodejs-jwt-authentication-oauth/
  - see also Bulletproof node.js architecture -https://softwareontheroad.com/ideal-nodejs-project-structure

## CSV File Download and Upload

+ CSV format example - https://en.wikipedia.org/wiki/Comma-separated_values#Example
+ Ben Nadel, Ask Ben: **Parsing CSV Strings With Javascript `Exec()` Regular Expression Command** - https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm - 10 years ago, still super helpful
+ This might be easier, though - Export HTML Table Data to CSV using JavaScript - https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
+ Mounir Messelmeni, **Reading CSV File With Javascript and HTML5 File API** - https://blog.mounirmesselmeni.de/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api/
+ (StackOverflow), CSV File Upload with React - https://stackoverflow.com/a/54067609

## Cool

+ @webreflection (2016), **Manage States via Prototypal Inheritance** - https://www.webreflection.co.uk/blog/2016/12/23/javascript-proto-state
+ **XSS filters** - https://github.com/yahoo/xss-filters
+ **Next** browser, keyboard-oriented, extensible web browser designed for power users, written in Lisp - https://next.atlas.engineer/

## Simplicity

+ Karthikeyan K, Top 20 Useful `jQuery` Code Snippets for Web Developers in 2019 - https://w3lessons.info/top-20-useful-jquery-code-snippets-web-developers/
+ Chris Love, Using the `<datalist>` element for guided, autocomplete, vlues for form input fields - https://love2dev.com/blog/datalist/
+ Sarah Drasner, CSS Grid Generator - https://cssgrid-generator.netlify.com/
+ Rajesh Pillai, ReactJS — A quick tutorial to build **dynamic JSON-based forms** - https://codeburst.io/reactjs-a-quick-tutorial-to-build-dynamic-json-based-form-a4768b3151c0
+ Leonie Watson, The difference between <kbd>keyboard</kbd> and screen reader navigation - https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/
+ Daniel Göransson, `Alt`-texts: The Ultimate Guide - https://axesslab.com/alt-texts/
+ Robin Rendle, `Color contrast` accessibility tools - https://css-tricks.com/color-contrast-accessibility-tools/
+ Adam Lynch, **Flexible Data Tables** with CSS Grid - https://adamlynch.com/flexible-data-tables-with-css-grid/
+ Thomas Barrasso, A practical guide to `ES6 Symbol` - https://codeburst.io/a-practical-guide-to-es6-symbol-3fc90117c7ac

## Complexity (the Logic of Update)

  + Enter, Update, Exit
  
    + Yaron Minsky, Incremental computation and the web - https://blog.janestreet.com/incrementality-and-the-web/
      > Where virtual DOM encourages you to think of your view calculation as an all at once affair, D3 makes you think about incrementalization explicitly where it matters. In particular, when you specify how the view changes in response to data, you do so by explicitly specifying what happens in three cases: enter, update, and exit. The enter case corresponds to new data points arriving, update corresponds to data points that are changing, and exit corresponds to data being removed.
    + Christian Behrens, Enter, Update, Exit - https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36 - which **finally** helped me understand Enter, Update, Exit in `d3`
    + Mike Bostock, 3 deep-dive articles on Enter, Update, Exit in `d3`
      - Thinking With Joins (2012) - https://bost.ocks.org/mike/join/
      - How Selections Work (2103) - https://bost.ocks.org/mike/selection/
      - Three Little Circles (2014) - https://bost.ocks.org/mike/circles/

  + Nick Scialli, Calculating Derived State in JavaScript Using Selectors - https://nick.scialli.me/calculating-derived-state-in-javascript-using-selectors/
    ```
      const createSelector = (...funcs) => {
        const last = funcs.pop();
        return state => {
          const inputs = funcs.map(func => func(state));
          return last(...inputs);
        };
      };
    ```
    - FWIW, here's *my own* version of `create-selector` - https://gist.github.com/dfkaye/68dc3c925ae153a916ad56a7fc4d7f3c
  
  + Luca Matteis, **B-threads**: programming in a way that allows for easier changes - https://medium.com/@lmatteis/b-threads-programming-in-a-way-that-allows-for-easier-changes-5d95b9fb6928 - part of *append-only programming* series
  + John von Neumann, **The General And Logical Theory Of Automata** \[PDF]  - https://www.cs.ucf.edu/~dcm/Teaching/COP5611Spring2010/vonNeumannSelfReproducingAutomata.pdf -- *scroll down to the section "The Future  Logical Theory Of Automata"*
  + Willy Tarreau (from 2011), **Elastic Binary Trees** &mdash; `ebtree` - https://wtarreau.blogspot.com/2011/12/elastic-binary-trees-ebtree.html
    - **implementation in HAProxy!** https://github.com/haproxy-unofficial-obsolete-mirrors/ebtree/blob/master/ebtree.h
  + Kevin Simler, Going Critical - https://meltingasphalt.com/going-critical/ - **models of diffusion in complex networks *(think percolation theory)***
  + Sergi Valverde, **Breakdown of Modularity in Complex Networks**, https://www.frontiersin.org/articles/10.3389/fphys.2017.00497/full
