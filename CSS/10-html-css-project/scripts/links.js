// #region -- establish event listeners for links
document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', establishLink)
})
// #endregion
// #region -- event listener callback
function establishLink(e) {
  e.preventDefault()
  loadContent(`./links/${e.target.dataset.link}.html`)
}
// #endregion
// #region -- load content into main page
function loadContent(url) {
  fetch(url).then(html => {
      document.querySelector('div.overview > div.center').innerHTML = html;
    })
}
// #endregion