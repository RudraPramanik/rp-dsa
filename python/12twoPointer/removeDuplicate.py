class Solution:
    def remove duplicate(self,nums):
        k = 1

        for i in range(1, len(s)):
            if nums[i] != nums[i-1]:
                nums[k] = nums[i]
                k+=1

                return k

# two pointer
# read pointer → scans(i)
# write pointer → overwrites duplicates(k)

# sorted → duplicates together
# compare with previous
# overwrite using k pointer
