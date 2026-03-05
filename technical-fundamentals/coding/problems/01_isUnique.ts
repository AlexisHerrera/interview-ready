// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    let bag = new Set()
    for (let i = 0; i < str.length; i++) {
        if (bag.has(str[i])) {
            return false
        }
        bag.add(str[i])
    }
    return true
}
