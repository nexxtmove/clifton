export class Bus {
  constructor(name) {
    this.name = name
    this.handler = this.handleMessageEvent.bind(this)
    this.recipients = {}

    this.start()
  }

  start() {
    window.addEventListener('message', this.handler)
  }

  stop() {
    window.removeEventListener('message', this.handler)
  }

  handleMessageEvent(event) {
    if (event.source === window) {
      return
    }

    let data

    try {
      data = JSON.parse(event.data)
    } catch {
      return
    }

    if (!data._clifton) {
      return
    }

    if (data._clifton.bus !== this.name) {
      return
    }

    const subject = data._clifton.subject
    const callbacks = this.recipients[subject]

    if (!callbacks) {
      return
    }

    const message = data.message

    for (const callback of callbacks) {
      callback(message)
    }
  }

  receive(subject, callback) {
    if (!this.recipients[subject]) {
      this.recipients[subject] = []
    }

    this.recipients[subject].push(callback)
  }

  deliver(subject, message = null) {
    const iframes = window.document.querySelectorAll('iframe')

    const bus = this.name
    const data = {
      _clifton: { bus, subject },
      message
    }

    const json = JSON.stringify(data)

    if (window.parent) {
      window.parent.postMessage(json, '*')
    }

    for (const iframe of iframes) {
      try {
        if (!iframe.contentWindow) {
          continue
        }

        iframe.contentWindow.postMessage(json, '*')
      } catch {
        continue
      }
    }
  }
}
