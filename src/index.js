import { sampleItem } from './someBacisJavascript'

async function getComponent() {
  const element = document.createElement('div')

  // const { sampleItem } = await import('./someBasicJavascript.js')
  element.innerHTML = JSON.stringify(sampleItem)

  return element
}

getComponent().then((component) => {
  document.body.appendChild(component)
});