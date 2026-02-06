class Solution:
   

    def firstUniqChar(self, string):
        freq = {}

         # Step 1: Count frequency
        for char in string:
            freq[char] = freq.get(char, 0) + 1

          # Step 2: Find first unique
        for i, char in enumerate(string):
            if freq[char] == 1:
                return i

        return -1

solution = Solution()
print(solution.firstUniqChar("leetcode"))
print(solution.firstUniqChar("loveleetcode"))
print(solution.uniqueChars("rudra"))

#Frequency Map + Second Pass
# One loop to count, One loop to find
# if none found -1