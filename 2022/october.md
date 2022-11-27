# October 2022

## History and Versioning

+ The Pijul manual (2022), **Theory** &#8594; https://pijul.com/manual/theory.html
  + Pijul is a change-based distributed version control system, competing against Git which is snapshot-based.
  + My July 2022 tweet on discovering pijul: https://twitter.com/dfkaye/status/1550191590798331906
+ Anthony Heddings (2022) - **How Do Git branches work?** &#8594; https://www.howtogeek.com/devops/how-do-git-branches-work/
  + More about Git branches
+ Git SCM documentation, **Basic Snapshotting** &#8594; https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting
+ Giuseppe Burtini  (2022), **History++ - A Better Way to Do Versioning** &#8594; https://blog.replit.com/history2-release
  + Replit's implmentation of version history.

## Formal Modeling

+ P (2022), **Formal Modeling and Analysis of Distributed Systems** &#8594; https://p-org.github.io/P/
  > P is a state machine based programming language for formally modeling and specifying complex distributed systems.

## Print

+ Peter Krautzberger (2022), **Thoughts on Print Equation Layout** &#8594; https://www.peterkrautzberger.org/0218/
  + On `MathML` still not well-supported after at least a decade...
+ Craig Buckler (2022), **Making your Web Pages Printer-Friendly with CSS** &#8594; https://blog.openreplay.com/making-your-web-pages-printer-friendly-with-css

## section to be named later

+ Tom MacWright (2022), **Hacker News** &#8594; https://macwright.com/2022/09/15/hacker-news.html
  + Tom added a script to his site to redirect when the referrer is Hacker News, because *[w]riting for the Hacker News audience makes my writing worse.*
  + ```js
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.host === 'news.ycombinator.com') {
          window.location.href = 'https://google.com/';
        }
      }
    } catch (e) { }
    ```

