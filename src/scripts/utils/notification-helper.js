const NotificationHelper = {
  sendNotification ({ title, options }) {
    // Check availability

    // Check permissions. If not granted, send request

    // Show notification

  },
  _checkAvailability () {
    return 'Notification' in window
  },
  _checkPermission () {
    return Notification.permission === 'granted'
  },
  async _requestPermission () {
    const status = await Notification.requestPermission()

    if (status === 'denied') {
      console.log('Notification denied')
    }

    if (status === 'default') {
      console.log('Permission closed')
    }
  },
  async _showNotification ({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready
    serviceWorkerRegistration.showNotification(title, options)
  }
}

export default NotificationHelper
