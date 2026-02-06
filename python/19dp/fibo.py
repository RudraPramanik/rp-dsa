class Solution:
    def fibo(self, n:int)->int:
        if n <= 1:
            return n
        
        prev2 = 0
        prev1 = 1

        for _ in range(2, n+1):
            curr = prev1 + prev2

            prev2 = prev1
            prev1 = curr

        return prev1

solution = Solution()
print(solution.fibo(8))


# dp
# prev2, prev1 → curr
# slide window forward
