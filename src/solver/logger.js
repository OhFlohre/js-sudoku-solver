export default (sudoku) => {
    for (const row of sudoku) {
        console.log(row.join(", "))
    }
}