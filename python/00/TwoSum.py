class Solution:
    def twoSum(self, nums, target):
        mp = {} # Our Memory Bank

        for i, n in enumerate(nums):
            diff = target - n # What are we looking for?

            if diff in mp:
                # We found the pair!
                return [mp[diff], i]

            # We haven't found a match yet, so save this number's index
            mp[n] = i

# --- How to run it ---
sol = Solution() # Create the 'Matchmaker' object
result = sol.twoSum([3, 4, 5, 8, 9], 7) # Pass the list and the target
print(result) # Output: [0, 1]