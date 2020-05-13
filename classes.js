// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()

  // Your turn! Create a new function called `two`, then call it from here.
  two()
  three()
  makeVisible()
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}

// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three')
  three.classList.add('orange')
}

// CREATE FUNCTION makeVisible HERE
function makeVisible () {
  var x = document.getElementsByClassName('invisible')
  x[0].classList.add('visible')
}
