const turnOn = document.querySelector('#ligar')
const turnOff = document.querySelector('#desligar')
const lamp = document.querySelector('#lamp')

const IsBroken = () => {
  return lamp.src.indexOf ('LampadaBroken') > -1
}

const lampOn = () => {
  if (!IsBroken()) {
    lamp.src = './img/LampadaOn.jpg'
  }
}

const lampOff = () => {
  if (!IsBroken()) {
    lamp.src = './img/LampadaOff.jpg'
  }
}

const lampBroken = () => {
  lamp.src = './img/LampadaBroken.jpg'
  alert('A lâmpada está quebrada, reinicie a página!')
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)