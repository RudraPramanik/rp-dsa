print("FILE IS RUNNING")

def reverseString(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s

print(reverseString(["H", "a", "n", "n", "a", "h"]))


print(reverseString2("hello"))

# two pointer-pattern(left, right)
# while loop(swap logic,left increase+=,right decrease-=)
# return the input-output