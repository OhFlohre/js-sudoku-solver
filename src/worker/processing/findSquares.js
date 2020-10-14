export default function findSquares(src) {
    const contours = new cv.MatVector()
    const hierarchy = new cv.Mat()
    let squares = [];

    cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE)

    for (let i = 0; i < contours.size(); i++) {
        let approx = new cv.Mat();

        cv.approxPolyDP(contours.get(i), approx, 5, true)
        if (approx.size().height === 4) {
            let { x, y, width, height } = cv.boundingRect(approx)
            let ratio = width / height
            if (0.95 < ratio < 1.05) {
                squares = [...squares, {
                    coords: [...approx.data32S],
                    area: cv.contourArea(approx)
                }]
            }
        }
        approx.delete()

    }
    try {
        hierarchy.delete()
        contours.delete()
    }
    catch (e) {
        console.log('findSquares')
    }
    return squares
}