function solve_(grid) {
    for (let [y, row] of grid.entries()) {
        for (let [x, num] of row.entries()) {
            if (num === 0) {
                let column = getCurrentColumn(grid, x)
                let square = getCurrentSquare(grid, x, y)
                for (let i = 1; i < 10; i++) {
                    if (!(row.includes(i) || column.includes(i) || square.includes(i))) {
                        grid[y][x] = i
                        if (solve_(grid)) {
                            return true
                        }
                        else {
                            grid[y][x] = 0
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

function getCurrentColumn(grid, x) {
    let column = []

    for (const row of grid) {
        column.push(row[x])
    }
    return column
}

function getCurrentSquare(grid, x, y) {
    x = Math.floor(x / 3) * 3
    y = Math.floor(y / 3) * 3
    let square = [
        [x, y], [x + 1, y], [x + 2, y],
        [x, y + 1], [x + 1, y + 1], [x + 2, y + 1],
        [x, y + 2], [x + 1, y + 2], [x + 2, y + 2]
    ].map(([x, y]) => grid[y][x])

    return square
}

function solve(inputGrid) {
    let grid = inputGrid.slice()
    if (solve_(grid)) {
        return grid
    }
    console.log('No solution found')
    return inputGrid
}

export default solve