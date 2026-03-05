// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }
    const map1 = new Map()
    const map2 = new Map()
    for (let i = 0; i < s1.length; i++) {
        if (map1.has(s1[i])) {
            map1.set(s1[i], map1.get(s1[i]))
        } else {
            map1.set(s1[i], 1)
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (map2.has(s2[i])) {
            map2.set(s2[i], map2.get(s2[i]))
        } else {
            map2.set(s2[i], 1)
        }
    }
    
    if (map1.size !== map2.size) {
        return false
    }
    
    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            return false
        }
        if (map2.get(key) !== value) {
            return false
        }
    }
    return true
}
