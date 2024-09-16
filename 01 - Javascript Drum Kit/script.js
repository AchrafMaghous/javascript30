var numOfButtons = document.querySelectorAll('.button').length;

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", () => {
    var buttonStyle = this.innerHTML
    sound(buttonStyle)
    animation(buttonStyle)
  })
}

document.addEventListener('keypress', (event) => {
  sound(event.key)
  animation(event.key)
})

function animation(key) {
  var activeButton = document.querySelector('.' + key)
  activeButton.classList.add('playing')
  setTimeout(() => {
    activeButton.classList.remove('playing')
  }, 100)
}


function sound(key) {
  switch (key) {
    case 'a':
      var sound1 = new Audio('sounds/a.mp3')
      sound1.play()
      break
    case 's':
      var sound2 = new Audio('sounds/s.mp3')
      sound2.play()
      break
    case 'd':
      var sound3 = new Audio('sounds/d.mp3')
      sound3.play()
      break
    case 'f':
      var sound4 = new Audio('sounds/f.mp3')
      sound4.play()
      break
    case 'g':
      var sound5 = new Audio('sounds/g.mp3')
      sound5.play()
      break
    case 'h':
      var sound6 = new Audio('sounds/h.mp3')
      sound6.play()
      break
    case 'j':
      var sound7 = new Audio('sounds/j.mp3')
      sound7.play()
      break
    case 'k':
      var sound8 = new Audio('sounds/k.mp3')
      sound8.play()
      break
    case 'l':
      var sound9 = new Audio('sounds/l.mp3')
      sound9.play()
      break
    default:
      console.log(key)
    }
}