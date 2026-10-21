// Keep the footer current without making core content depend on JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
