
# October 2018

+ **Avoid accidental complexity in your app state** https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a
+ (forked) React JSX in vanilla js - https://gist.github.com/dfkaye/f3229e5ace79b6873022987f160c7b61
+ (forked) Stringify dom to json and revive - https://gist.github.com/dfkaye/2a163baa4f754b22cd985f7155456a46
+ A cup of coffee to illustrate [The Five UI States](https://uxdesign.cc/a-cup-of-coffee-and-states-of-ui-screens-1873f522901e)
+ How to design UI states and communicate with developers using a Finite State Machine (FSM) table
 https://medium.freecodecamp.org/designing-ui-states-and-communicate-with-developers-effectively-by-fsm-fb420ca53215
+ CSS `grid-template-areas` for **concise media rules** https://robots.thoughtbot.com/concise-media-queries-with-css-grid
+ ES6 proxy example: Two-way Data Binding https://www.sitepoint.com/es6-proxies/#proxyexample2twowaydatabinding
+ Running `mocha` tests as native ES6 modules in a browser https://medium.com/dailyjs/running-mocha-tests-as-native-es6-modules-in-a-browser-882373f2ecb0

+ **@innovati**'s `caffeinated stylesheets`, "parse extended CSS and separate out the JS-powered styles"
    -  in the browser [deqaf](https://github.com/tomhodgins/deqaf)
    -  on the server [qaffeine](https://github.com/tomhodgins/qaffeine)
+ [**minimal javascript** setup](https://css-tricks.com/a-minimal-javascript-setup/)
    - actually about [gia](https://github.com/giantcz/gia), a minimalist framework for server rendered websites
    
+ **TOKENS**
    - Timing attacks with [CSS selectors](https://blog.sheddow.xyz/css-timing-attack/)
        > Timing attacks enable an attacker to extract secrets maintained in a security system by observing the time it takes the system to respond to various queries
        - On timing attacks, my own gist => [timing attack `compare()`](https://gist.github.com/dfkaye/e88100f0621a12bdf8f511eabc08eae8)
    - Why use [Access tokens](https://auth0.com/docs/api-auth/why-use-access-tokens-to-secure-apis)
    + answer #4, [Is it correct to use form field(hidden) for storing Session Token?](https://security.stackexchange.com/questions/9133/is-it-correct-to-use-form-fieldhidden-for-storing-session-token#9140)
    + [Access token vs Refresh token](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

+ **private npm registry (and *monorepos*)**
    + Matthew Amos, [JavaSript **monorepos**](https://blog.scottlogic.com/2018/02/23/javascript-monorepos.html)
    + Juan Picado [Five use cases where a npm private proxy fits in your workflow](https://medium.com/@jotadeveloper/five-use-cases-where-a-npm-private-proxy-fits-in-your-workflow-632a81779c14)
        + "if you only rely on Github auth and AWS as a platform..." [codebox-npm](https://github.com/craftship/codebox-npm)
    + Gustavo Gondim, [Verdaccio - private diy npm registry](https://medium.com/engenharia-noalvo/ways-to-have-your-private-npm-registry-and-a-final-diy-solution-eed001a88e74)

+ **`owasp-zap` and security testing**
    + https://medium.com/@Gr3g0ire/automatic-security-tests-in-jenkins-with-owasp-zap-d81bdb8e65d6
    + https://dzone.com/articles/beating-the-cost-time-and-quality-equation-with-ow
    + http://blog.xaviermaso.com/2018/10/01/Scanning-modern-web-applications-with-OWASP-ZAP.html
    + https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project

+ **front-end things to re-read**
    + **Accessibility Testing Tools for Mobile and Desktop websites**, https://www.24a11y.com/2017/accessibility-testing-tools-desktop-mobile-websites/
    + **CSS Grid by Example**, https://gridbyexample.com/examples/
    + **A simple development http server with live reload capability**, [live-server](http://tapiov.net/live-server/)
        - has bugs when it comes to strict CSP (no nonce support) and reattacheds styleSheets to the head rather than the original styleSheet's parentNode
    + [**owl selector**](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls)
    + Heydon's [Inclusive Components](https://inclusive-components.design/)
    + Heydon's [**inclusive design checklist**](https://github.com/Heydon/inclusive-design-checklist)
    + [**front-end performance checklist**](https://github.com/thedaviddias/Front-End-Performance-Checklist)
    + Paul J Adam - [**#ally resources**, etc.](http://pauljadam.com/resources.html)
    + Adam B. Silver [blog](https://adamsilver.io/articles/)
    + Tommy Hodgins [**jsincss**](https://jsincss.com/)

+ Understanding *stacking contexts* - [Putting things on top of other things](http://tellthemachines.com/stacking-contexts/)
+ Too many modals, https://modalzmodalzmodalz.com/
+ Copy API endpoints to your fs and run a local server using them [SnapStub](https://github.com/ruyadorno/snapstub)
+ freneticarray.com, [An Evolutionary Approach To Problem Solving](http://freneticarray.com/an-evolutionary-approach-to-problem-solving/)
+ series by @YassineElouafi2, [Implementing Algebraic Effects and Handlers](https://gist.github.com/yelouafi/57825fdd223e5337ba0cd2b6ed757f53)
    - see also, [Algebraic Effects on top of Generators](https://github.com/yelouafi/algebraic-effects.js)
    - and (PDF) the original tutorial, [Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)
+ JS snippets at [30 seconds of code](https://30secondsofcode.org/)
