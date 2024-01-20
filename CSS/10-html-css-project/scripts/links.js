function establishLink(e) {
  e.preventDefault()
  loadContent(`./links/${e.target.dataset.link}.html`)
}

function loadContent(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      document.querySelector('div.overview > div.center').innerHTML = html;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', establishLink)
})