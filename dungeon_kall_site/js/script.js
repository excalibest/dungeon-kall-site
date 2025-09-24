/*
 * Simple JavaScript for Game Master Kall’s site
 *
 * Handles hamburger menu toggling on small screens. If you wish to extend
 * interactivity – such as adding scroll animations or dark/light theme
 * toggles – you can expand this script accordingly.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }
});