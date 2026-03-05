// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
    const count: Map<string, number> = new Map()
    for (let i = 0; i < str.length; i++) {
        const key = str[i].toLowerCase()
        if (key === ' ') {
            continue
        }
        count.set(key, (count.get(key) ?? 0) + 1)
    }
    let hasOddCount = false
    for (let [key, val] of count) {
        // is odd
        if (val % 2 !== 0) {
            if (hasOddCount) {
                return false
            }
            hasOddCount = true
        }
    }
    return true
}