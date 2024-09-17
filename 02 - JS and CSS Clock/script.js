const handHour = document.querySelector('.hand-hour')
const handMin = document.querySelector('.hand-min')
const handSec = document.querySelector('.hand-sec')

const setDate = function () {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  if (secondsDegrees === 90 | 450) handSec.style.transition = 'None'
  else handSec.style.transition = 'all 0.05s'
  handSec.style.transform = `rotate(${secondsDegrees}deg)`
  
  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  if (minutesDegrees === 90 | 450) handSec.style.transition = 'None'
  else handSec.style.transition = 'all 0.05s'
  handMin.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90
  if (hoursDegrees === 90 | 450) handSec.style.transition = 'None'
  else handSec.style.transition = 'all 0.05s'
  handHour.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()