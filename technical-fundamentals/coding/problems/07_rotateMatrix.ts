// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
    function rotateMatrixRange(start: number, end: number) {
        for (let i = 0; i < (end - start); i++) {
            [matrix[start + i][end], matrix[start][start + i]] = [matrix[start][start + i], matrix[start + i][end]];
            [matrix[start][start + i], matrix[end - i][start]] = [matrix[end - i][start], matrix[start][start + i]];
            [matrix[end - i][start], matrix[end][end - i]] = [matrix[end][end - i], matrix[end - i][start]];
        }
    }
    let start = 0
    let end = matrix.length - 1
    while (end > start) {
        rotateMatrixRange(start, end)
        start += 1
        end -= 1
    }
}