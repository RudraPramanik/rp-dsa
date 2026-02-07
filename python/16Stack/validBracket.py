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
                if not stack or stack.pop != mapping[char]:
                    return False
            else:
                stack.append(char)
            return not stack

result = Solution()
print(result.validParen('()'))


# 
# for ch in data:
#     if opening:
#         stack.append(ch)
#     else:
#         if stack empty or mismatch:
#             return False
#         stack.pop()

# return stack empty