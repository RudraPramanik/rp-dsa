print("FILE IS RUNNING")

def reverseString(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s

print(reverseString(["H", "a", "n", "n", "a", "h"]))

def reverseString2(s):
    arr = list(s)
    left, right = 0, len(arr)-1
    while left < right:
        arr[left], arr[right]= arr[right], arr[left]
        left +=1
        right -=1

        return "".join(arr)
 
print(reverseString2("hello"))