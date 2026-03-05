// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
    const columns = new Set<number>();
    const rows = new Set<number>();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i)
                columns.add(j)
            }
        }
    }

    function applyZerosRow(index: number){
        for (let j = 0; j < matrix[index].length; j++) {
            matrix[index][j] = 0
        }
    }

    function applyZerosColumn(index: number){
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][index] = 0
        }
    }
    
    for (const col of columns) {
        applyZerosColumn(col)
    }
    for (const row of rows) {
        applyZerosRow(row)
    }
}