
def isPalindrome(s):
    left , right = 0, len(s)-1

    while left<right :
        while left<right and not s[left].isalnum():
            left += 1
        while left<right and not s[right].isalnum():
            right -= 1
        if(s[left].lower() != s[right].lower() ):
            return False
        left +=1
        right -=1
    return True

print(isPalindrome("abBa"))
# nested while(edge case should not be number:isalnum()),
# left increase/ right decrease(if the condition satisfy)
# inside while looping (if input[left] !== input[right]) =>false
# inside main while loop- left increase, right decrease
# otherwise return true