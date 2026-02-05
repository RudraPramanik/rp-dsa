 def uniqueChars(self, s):
        freq = {}
        # Step 1: Count frequency
        for char in s:
            freq[char] = freq.get(char,0)+1

        
        # step2: collect the all unique

        result = []
        for char in s:
            if freq[char] == 1:
                result.append(char)
                
        return result