class Solution:
    def twoSums(self, nums, target):
        mp = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in mp:
                return [mp[diff],i]
            mp[n]= i

sol = Solution() 
result = sol.twoSums([12, 2,3, 7, 11, 15], 9) 
print(result) # Output: [0, 1

# hashmap pattern
# inside the for loop, find differenc,
# if difference exist in map(dict) return mp[diff],i => [mp[2],1] => [0,1] => value[2,7]
# [mp[2], 1]  => [0, 1]


# need = target - current
# if need exists → answer
# else store current
