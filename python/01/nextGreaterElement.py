class Solution:
    def nextGreaterElement(self, nums1, nums2):
        stack = []
        mapping={}

        for n in nums2:
            while stack and n > stack[-1]:
                mapping[stack.pop()] = n
            stack.append(n)
        return [mapping.get(n, -1) for n in nums1]


result = Solution()
print(result.nextGreaterElement([4,1,2],[1,3,4,2]))
# [1,3,4,2],[4,1,2]