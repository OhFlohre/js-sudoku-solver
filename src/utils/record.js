import { barHeight } from '../constants.json'

async function record() {
    try {
        const constraints = {
            audio: false,
            video: {
                facingMode: "environment",
                height: { exact: window.innerHeight - barHeight }
            }
        }

        let media = await navigator.mediaDevices.getUserMedia(constraints)
        return media
    }
    catch (e) {
        alert(e)
    }
}

export default record