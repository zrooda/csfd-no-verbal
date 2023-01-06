// ==UserScript==
// @name        No Verbal on ČSFD.cz
// @namespace   Violentmonkey Scripts
// @match       https://*.csfd.cz/*
// @run-at      document-end
// @version     1.1
// @author      mystrdat
// @description Odstraní vybrané uživatele z recenzí a hodnocení na ČSFD.cz
// @homepageURL https://github.com/mystrdat/csfd-no-verbal
// @icon        https://www.google.com/s2/favicons?domain=csfd.cz
// ==/UserScript==

/* jshint esversion: 11 */

(function() {
  const users = ['verbal'];
  const comments = document.querySelectorAll('#snippet--comments > article');
  const ratings = document.querySelectorAll('.aside-movie-profile .user-list li');
  // Delete comments
  comments.forEach((comment) => {
    users.includes(comment.querySelector('.user-title-name')?.textContent) && comment.remove();
  });
  // Delete ratings
  ratings.forEach((rating) => {
    users.includes(rating.querySelector('a')?.textContent) && rating.remove();
  });
})();
