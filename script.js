// ==UserScript==
// @name        No Verbal on ČSFD.cz
// @namespace   mystrdat-userscripts
// @author      mystrdat
// @version     1.6.1
// @match       https://*.csfd.cz/*
// @run-at      document-end
// @grant       GM.getValue
// @description Odstraní vybrané uživatele z recenzí, hodnocení a diskuzí na ČSFD.cz
// @homepageURL https://github.com/mystrdat/csfd-no-verbal
// @updateURL   https://raw.githubusercontent.com/mystrdat/csfd-no-verbal/master/script.js
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
  removeMatchedElement([...comments, ...discussions], ".user-title-name");
  // Delete ratings
  removeMatchedElement(ratings, "a");
})();
