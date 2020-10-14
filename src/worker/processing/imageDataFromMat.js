export function imageDataFromMat(mat) {
    const img = new cv.Mat(mat)
    if (img.type() === cv.CV_8UC1) {
        cv.cvtColor(img, img, cv.COLOR_GRAY2RGBA)
    }
    else if (img.type() === cv.CV_8UC3) {
        cv.cvtColor(img, img, cv.COLOR_RGB2RGBA)
    }
    const clampedArray = new ImageData(new Uint8ClampedArray(img.data), img.cols, img.rows)
    img.delete()
    return clampedArray
}