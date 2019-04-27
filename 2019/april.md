# April 2019

+ **In memory of Joe Armstrong** (@joeerl), creator of `erlang`
  + Why do we need modules at all? - http://erlang.org/pipermail/erlang-questions/2011-May/058768.html
  + [video] The Mess We're In - https://www.youtube.com/watch?v=lKXe3HUG2l4

+ Dave Sullivan, **Agile Lite** - https://github.com/davebs/AgileLite
+ Cody Lindley, **JavaScript Enlightenment *updated for ES-2015+*** - https://frontendmasters.com/books/javascript-enlightenment/

+ **Accessibility**

  + Adrian Roselli, **Avoid Messages Under Fields** - http://adrianroselli.com/2017/01/avoid-messages-under-fields.html
  + Matt Reyer, **Developing a JavaScript-free Frontend** - https://javascript.works-hub.com/learn/a-javascript-free-frontend-61275
  + Brad Frost, **Enforcing Accessibility Best Practices with Automatically-Generated IDs** - http://bradfrost.com/blog/post/enforcing-accessibility-best-practices-with-automatically-generated-ids/

+ **Other good stuff**

  + Sebastiano Guerriero, Theme-switching with CSS custom properties (variables) - https://codyhouse.co/blog/post/dark-light-switch-css-javascript
  + Avik Das, A graphical introduction to **dynamic programming** - https://avikdas.com/2019/04/15/a-graphical-introduction-to-dynamic-programming.html
  + Iven Marquardt, **Taming the DOM** - https://medium.com/@iquardt/taming-the-dom-50c8f1a6e892
    - (gist) Functional Reactive Programming **(FRP)** implemented with a couple rules, types and combinators - https://gist.github.com/ivenmarquardt/9f9d53e2469b3df438f3628297e2dc9f
  + Bret Cameron, Useful tips for writing more concise and performant JavaScript - https://medium.com/@bretcameron/12-javascript-tricks-you-wont-find-in-most-tutorials-a9c9331f169d

+ **Monorepos**

  + Michal Zalecki, **Solve code sharing and setup project with Lerna and monorepo** - https://michalzalecki.com/solve-code-sharing-and-setup-project-with-lerna-and-monorepo/ - this one uses `lerna` and `create-react-app` - *good, fast, **and** cheap*
  + Markus Oberlehner, Monorepos in the Wild - https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9
  + John Tucker, Monorepos by Example:
    + Part 1 - https://codeburst.io/monorepos-by-example-part-1-3a883b49047e
    + Part 2 - https://codeburst.io/monorepos-by-example-part-2-4153712cfa31
    + Part 3 - https://codeburst.io/monorepos-by-example-part-3-1ebdea7ccbea
  + `Lerna`, A tool for managing JavaScript projects with multiple packages - https://github.com/lerna/lerna
    + sidebar on `npm-scope` - https://docs.npmjs.com/misc/scope
  + Andrico Karoulla, Develop and Deploy your own React monorepo app in under 2 hours, using Lerna, Travis and Now. - https://codeburst.io/develop-and-deploy-your-own-react-monorepo-app-in-under-2-hours-using-lerna-travis-and-now-2b140d647238
    + git repo: Lerna Monorepo Article (Starter) - https://github.com/andrico1234/lerna-monorepo-finisher

+ M.J. Parnell, ***The use of “science” (or "best practices" or "it's a standard") as a superficial lacquer designed to impress (or silence), with scant regard for truth, has only one description: bullshit.*** - http://mjparnell.com/bullshit_science_ux_design/ - fire the pretentious dilettante charlatans who know they can't bullshit you but still do it anyway, hoping you'll shut up and do as you're told. 
  
+ **Examples of Bullshit with Harmful Consequences**

  + **Liferay** 7 + React (JS)
  
    + Portlet API - http://portals.apache.org/pluto/portlet-1.0-apidocs/
    + **Deploy jar files into running docker instance of liferay** - https://stackoverflow.com/questions/46434606/how-to-deploy-the-jar-files-into-liferay-running-on-docker-from-local-machine
    + **Sharing session data across portlets** - https://community.liferay.com/blogs/-/blogs/how-can-i-share-session-data-across-portlets-in-liferay-
    + Search for **"map LDAP"** - https://liferay4all.blogspot.com/
    + Customize liferay **navigation** (persist) - https://community.liferay.com/forums/-/message_boards/message/94612790
    + A Liferay JavaScript portlet to speed up development - https://github.com/hannikkala/liferay-javascript-portlet
    + Alexander Konovalov, Liferay 7 + React JS (or anyone other JS framework) - https://medium.com/@s2dent/liferay-7-react-js-or-anyone-other-js-framework-cb7193f6dbfa
    + Liferay npm bundler - https://community.liferay.com/it/blogs/-/blogs/why-we-need-a-new-liferay-npm-bundler-2-of-3-

  + React/JSX, Redux...:

    + Anton Lavrenov (@lavrton), **Optimizing react-redux store for high performance updates** - https://lavrton.com/optimizing-react-redux-store-for-high-performance-updates-3ae6f7f1e4c1/
    + Alex Gilleran, JSX Control Statements - https://github.com/AlexGilleran/jsx-control-statements - (JSTL/XSLT tags but for the browser, so it's "cool" now)
    + Matt Crowder, `mapToDispatchProps` - https://dev.to/mcrowder65/you-ve-been-doing-mapdispatchtoprops-wrong-this-entire-time-582m
    + Koen Bok, ES6 / React Cheatsheet - https://paper.dropbox.com/doc/ES6-React-Cheatsheet-Th7joG9fFSSiyZgOFYqj6

  + JSX alternatives:

    - `react-hyperscript` - https://github.com/mlmorg/react-hyperscript
    - `htm` by Jason Miller (@\_developit) - https://github.com/developit/htm - do it at build time, or on the server...
    - `ijk` - https://github.com/lukejacksonn/ijk

  + React alternatives:

    - preact by @\_developit - https://preactjs.com/
    - **hyperapp** (version coming soon) - https://github.com/jorgebucaran/hyperapp

  + React application testing

    + @Raathigesh, `Majestic`, Zero Config desktop UI for Jest - https://majestic.debuggable.io/ - electron app, pretty snazzy
    + Dominic Frazer, Testing React with Jest and Enzyme:
      + Part I - https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675
      + Part II - https://codeburst.io/testing-react-events-with-jest-and-enzyme-ii-46fbe4b8b589
    + Dominic Frazer, Mocking HTTP requests with Nock - https://codeburst.io/testing-mocking-http-requests-with-nock-480e3f164851
    + Vijay Thirugnanam, Unit Testing React Components: Jest or Enzyme? - https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
    + Kent C. Dodds, `react-testing-library` - https://github.com/kentcdodds/react-testing-library
    + Matt Crowder, How to test implementation details with react-testing-library - https://dev.to/mcrowder65/how-to-test-implementation-details-with-react-testing-library-4bln
