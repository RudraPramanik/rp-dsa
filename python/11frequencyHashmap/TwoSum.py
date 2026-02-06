class Solution:
      
    def twoSum(self, nums, target):
        mp = {} # Our Memory Bank dict(hash map)

        for i, n in enumerate(nums):
            diff = target - n # What are we looking for?

            if diff in mp:
                # We found the pair!
                return [mp[diff], i]

            # We haven't found a match yet, so save this number's index
            mp[n] = i


sol = Solution() 
result = sol.twoSums([2, 7, 11, 15], 9) 
print(result) # Output: [0, 1

# hashmap pattern
# inside the for loop, find differenc,
# if difference exist in map(dict) return mp[diff],i => [mp[2],1] => [0,1] => value[2,7]
# [mp[2], 1]  => [0, 1]


# need = target - current
# if need exists → answer
# else store current
