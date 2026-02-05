class Solution:
    def uniqueChars(self, s):
        freq = {}
        for char in s:
            freq[char] = freq.get(char,0)+1

        result = []
        for char in s:
            if freq[char] == 1:
                result.append(char)
                
        return result

    def firstUniqChar(self, s):
        freq = {}

        for char in s:
            freq[char] = freq.get(char, 0) + 1

        for i, char in enumerate(s):
            if freq[char] == 1:
                return i

        return -1

solution = Solution()
print(solution.firstUniqChar("leetcode"))
print(solution.firstUniqChar("loveleetcode"))
print(solution.uniqueChars("rudra"))
