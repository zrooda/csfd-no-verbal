// ==UserScript==
// @name        No Verbal on ČSFD.cz
// @namespace   mystrdat-scripts
// @match       https://*.csfd.cz/*
// @run-at      document-end
// @version     1.2
// @author      mystrdat
// @description Odstraní vybrané uživatele z recenzí, hodnocení a diskuzí na ČSFD.cz
// @homepageURL https://github.com/mystrdat/csfd-no-verbal
// @icon        https://www.csfd.cz/favicon.ico
// @license     MIT
// ==/UserScript==

/* jshint esversion: 11 */

(function() {
  const users = ['verbal'];
  const comments = document.querySelectorAll('#snippet--comments > article');
  const ratings = document.querySelectorAll('.aside-movie-profile .user-list li');
  const discussions = document.querySelectorAll('#topPost > .article-forum-item');
  // Delete comments & discussions
  [...comments, ...discussions].forEach((comment) => {
    users.includes(comment.querySelector('.user-title-name')?.textContent) && comment.remove();
  });
  // Delete ratings
  ratings.forEach((rating) => {
    users.includes(rating.querySelector('a')?.textContent) && rating.remove();
  });
})();
