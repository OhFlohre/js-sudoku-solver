export default function threshold(src, dist) {
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0)
    cv.GaussianBlur(src, src, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT)
    cv.adaptiveThreshold(src, dist, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 10)
}