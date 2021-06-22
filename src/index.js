import { sampleItem } from './someBasicJavascript'
import someIcon from './someIcon.png'

async function getComponent() {
  const element = document.createElement('div')

  // const { sampleItem } = await import('./someBasicJavascript.js')
  element.innerHTML = JSON.stringify(sampleItem)

  return element
}

getComponent().then((component) => {
  document.body.appendChild(component)
  const myIcon = new Image();
  myIcon.src = someIcon;

  document.body.appendChild(myIcon);
});