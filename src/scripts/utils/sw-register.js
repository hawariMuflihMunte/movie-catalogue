const swRegister = async () => {
  navigator.serviceWorker.register('./sw.bundle.js')
}

export default swRegister
