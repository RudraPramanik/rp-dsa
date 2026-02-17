class Solution:
    def validParen(self, data: str)-> bool:
        stack = []
        mapping = {
            ')' : '(',
            '}' : '{', 
            ']' : '[',
        } 

        for char in data:
            if char in mapping:
                # most imp(remove last and remember vlue and matching with map char) )
                if not stack or stack.pop() != mapping[char]:
                    return False
            else:
                stack.append(char)
            return not stack

result = Solution()
print(result.validParen('()'))


# stack pattern
# for ch in data:
#     if opening:
#         stack.append(ch)
#     else:
#         if stack empty or mismatch:
#             return False
#         stack.pop()

# return stack empty