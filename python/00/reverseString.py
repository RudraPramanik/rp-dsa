print("FILE IS RUNNING")

def reverseString(s):
    arr = list(s)
    left, right = 0, len(s)-1

    while left<right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

    return "".join(arr) 

print(reverseString("hello"))

# two pointer-pattern(left, right)
# while loop(swap logic,left increase+=,right decrease-=)
# return the input-output