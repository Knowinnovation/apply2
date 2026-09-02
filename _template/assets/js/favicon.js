!(function () {
  "use strict"
  window.addEventListener('load', function () {

    const urlWithCacheBuster = `images/favicon.png?t=${Date.now()}`
    const link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
    link.href = urlWithCacheBuster
    console.log(link)
  })
}());

