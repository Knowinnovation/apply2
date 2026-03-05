!(function () {
  "use strict"
  window.addEventListener('load', function (event) {

    var rest = document.getElementById('therest')
    var show = document.getElementById('showfullbio')

    show.addEventListener('click', function (event) {
      show.style.display = 'none'
      rest.style['font-size'] = '1em'
    })

  })
}());

