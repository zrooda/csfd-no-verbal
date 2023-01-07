// ==UserScript==
// @name        No Verbal on ČSFD.cz
// @namespace   Violentmonkey Scripts
// @match       https://*.csfd.cz/*
// @run-at      document-end
// @grant       GM.getValue
// @version     1.3
// @author      mystrdat
// @description Odstraní vybrané uživatele z recenzí, hodnocení a diskuzí na ČSFD.cz
// @homepageURL https://github.com/mystrdat/csfd-no-verbal
// @icon        https://www.csfd.cz/favicon.ico
// @license     MIT
// ==/UserScript==

/* jshint esversion: 11 */

(async function() {
  const users = await GM.getValue("users", ["verbal"]);
  const comments = document.querySelectorAll("#snippet--comments > article");
  const ratings = document.querySelectorAll(".aside-movie-profile .user-list li");
  const discussions = document.querySelectorAll("#topPost > .article-forum-item");
  // Delete comments & discussions
  [...comments, ...discussions].forEach((comment) => {
    users.includes(comment.querySelector(".user-title-name")?.textContent) && comment.remove();
  });
  // Delete ratings
  ratings.forEach((rating) => {
    users.includes(rating.querySelector("a")?.textContent) && rating.remove();
  });
})();
