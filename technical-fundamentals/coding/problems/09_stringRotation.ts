// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings"

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")
// Any rotation can partitioned in two:
// S1 = x + y 
// S2 = y + x
// in the example was x = wat, y = erbottle => S1 = waterbottle S2 = erbottlewat
// If if I concatenate S1 with itself is S1 + S1 = x + y + x + y = x + (y + x) + y = x + S2 + y
// then s2 is substring of 2S1.

export default function stringRotation(s1: string, s2: string): boolean {
    return isSubstring(s1 + s1, s2)
}
