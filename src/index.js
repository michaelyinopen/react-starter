import { sampleItem } from './someBacisJavascript'

function component() {
  const element = document.createElement('div')
  element.innerHTML = JSON.stringify(sampleItem)

  return element
}

document.body.appendChild(component())