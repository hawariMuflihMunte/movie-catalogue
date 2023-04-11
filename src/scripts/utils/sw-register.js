const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in the browser')
    return false
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js')
    console.log('Service worker registered')
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}

export default swRegister
