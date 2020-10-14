import { imageDataFromMat } from './imageDataFromMat'

export default function crop(src) {
    let digits = []

    for (let y = 1; y <= 9; y++) {
        let arr = []
        for (let x = 1; x <= 9; x++) {
            let mat = new cv.Mat()
            let rect = new cv.Rect(
                src.rows / 9 * x - src.rows / 9,    //x
                src.cols / 9 * y - src.cols / 9,    //y
                src.rows / 9,                       //width
                src.cols / 9                        //height
            )
            mat = src.roi(rect)
            mat = removeBorder(mat)
            cv.resize(mat, mat, new cv.Size(28, 28), 0, 0, cv.INTER_AREA)
            let nonZero = cv.countNonZero(mat)
            if (nonZero / (mat.cols * mat.rows) > 0.98) {
                arr = [...arr, 0]
            }
            else {
                arr = [...arr, imageDataFromMat(mat)]
            }
            try {
                mat.delete()
            }
            catch (e) {
                console.log('toArray')
            }
        }
        digits = [...digits, arr]
        arr = []
    }
    return digits
}

function removeBorder(mat) {
    let rect = new cv.Rect(10, 10, mat.rows - 20, mat.rows - 20)
    return mat.roi(rect)
}