// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  if (str1 === str2) {
      return true
  }
  if (Math.abs(str1.length - str2.length) > 1) {
      return false
  }
  const s1IsShorter = str1.length < str2.length
  const s1IsLonger = str1.length > str2.length
  const maxLength = Math.max(str1.length, str2.length)
  for (let i = 0; i < maxLength; i++) {
        if (str1[i] !== str2[i]) {
            if (s1IsLonger) {
                return str1.slice(i + 1) === str2.slice(i)
            } else if (s1IsShorter) {
                return str2.slice(i + 1) === str1.slice(i)
            } else {
                return str1.slice(i + 1) === str2.slice(i + 1)
            }
        }
    }
  return true
}
