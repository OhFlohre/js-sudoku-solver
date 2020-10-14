import { imageDataFromMat } from './imageDataFromMat'
import threshold from './threshold'
import findSquares from './findSquares'
import perspectiveTransform from './perspective'
import createImageArray from './transformToArray'

export default async (imageData, cb) => {

    let img = new cv.matFromImageData(imageData)
    let img_thresh = new cv.Mat()
    let isolated_sudoku = new cv.Mat()
    threshold(img, img_thresh)
    let squares = findSquares(img_thresh)

    let sudokuSquare = squares
        .filter(square => square.coords[0] != 0 || square.coords[1] != 0)
        .find(square => square.area == Math.max(...squares.map(square_ => square_.area)))

    if (sudokuSquare) {
        perspectiveTransform(sudokuSquare.coords, img_thresh, isolated_sudoku, imageData.width)
        cb(imageDataFromMat(isolated_sudoku))
    }

    img.delete()
    img_thresh.delete()
    isolated_sudoku.delete()
}
