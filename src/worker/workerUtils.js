class WorkerUtils {
    constructor() {
        this.callbacks = []

        self.onmessage = e => {
            let { channel, msg } = e.data
            this.callbacks
                .filter(cb => cb.channel === channel)
                .forEach(cb => cb.cb(msg))
        }
    }

    post(channel, message = null) {
        self.postMessage({ channel, message })
    }

    on(channel, cb) {
        this.callbacks = [{ channel, cb }, ...this.callbacks]
    }
}

export default WorkerUtils