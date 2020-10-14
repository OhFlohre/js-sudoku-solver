export default function perspective(coords, src, dist, size) {
    const coordsDist = [size, 0, size, size, 0, size, 0, 0]

    const srcVertices = cv.matFromArray(4, 1, cv.CV_32FC2, coords)
    const distVertices = cv.matFromArray(4, 1, cv.CV_32FC2, coordsDist)
    const perspectiveTransform = cv.getPerspectiveTransform(srcVertices, distVertices)
    const cvSize = new cv.Size(size, size)
    const cvScalar = new cv.Scalar()

    cv.warpPerspective(
        src,
        dist,
        perspectiveTransform,
        cvSize,
        cv.INTER_LINEAR,
        cv.BORDER_CONSTANT,
        cvScalar
    )
    try {
        srcVertices.delete()
        distVertices.delete()
        perspectiveTransform.delete()
    }
    catch (e) {
        console.log('perspective')
    }
}