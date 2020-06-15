module.exports = (sudoku) => {
    for (const row of sudoku) {
        console.log(row.join(", "))
    }
}