import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in the browser')
    return false
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('Service worker registered')
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}

export default swRegister
