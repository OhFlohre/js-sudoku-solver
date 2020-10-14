import opencv from './lib/opencv'
import WorkerUtils from './workerUtils'

import processImageData from './processing'

async function initialize() {
    const cv = await opencv
    const worker = new WorkerUtils()

    worker.on('imageData', imageData => {
        processImageData(imageData)
            .then(isolatedImageData => {
                worker.post('isolatedImageData', isolatedImageData)
            })
            .catch(() => {
                worker.post('error', 'no Sudoku found')
            })
    })

    worker.post('load', null)
}

initialize()