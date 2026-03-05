// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
    if (str === '') {
        return ''
    }
    let result = ''
    let lastChar = str[0]
    let count = 1
    for (let i = 1; i < str.length; i++) {
        let currentChar = str[i]
        if (currentChar === lastChar) {
            count += 1
        } else {
            result += `${lastChar}${count}`
            lastChar = currentChar
            count = 1
        }
    }
    result += `${lastChar}${count}`
    return result.length < str.length ? result : str
}