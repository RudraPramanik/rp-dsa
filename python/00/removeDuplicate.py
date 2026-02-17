class Solution:
    def duplicate(nums):
        k = 1

        for i in range(1, len(s)):
            if nums[i] != nums[i-1]:
                nums[k] = nums[i]
                k+=1

                return k

sol = Solution() 
result = sol.duplicate(2,3,4,5,5) 
print(result) #


# two pointer
# read pointer → scans(i)
# write pointer → overwrites duplicates(k)

# sorted → duplicates together
# compare with previous
# overwrite using k pointer
