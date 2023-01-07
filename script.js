// ==UserScript==
// @name        No Verbal on ČSFD.cz
// @namespace   mystrdat-userscripts
// @match       https://*.csfd.cz/*
// @run-at      document-end
// @grant       GM.getValue
// @version     1.6
// @author      mystrdat
// @description Odstraní vybrané uživatele z recenzí, hodnocení a diskuzí na ČSFD.cz
// @homepageURL https://github.com/mystrdat/csfd-no-verbal
// @icon        https://www.csfd.cz/favicon.ico
// @license     MIT
// ==/UserScript==

/* jshint esversion: 11 */

(async () => {
  const users = await GM.getValue("users", ["verbal"]);
  const comments = document.querySelectorAll("#snippet--comments > article");
  const ratings = document.querySelectorAll(".aside-movie-profile .user-list li");
  const discussions = document.querySelectorAll("#topPost > .article-forum-item");
  const removeMatchedElement = (elements, selector) => {
    elements.forEach((element) => {
      const author = element.querySelector(selector)?.textContent;
      if (users.includes(author)) {
        console.info(`csfd-no-verbal - removing ${author}`, element);
        element.remove();
      }
    })
  };

  // Delete comments & discussions
  removeEntry([...comments, ...discussions], ".user-title-name");
  // Delete ratings
  removeEntry(ratings, "a");
})();
