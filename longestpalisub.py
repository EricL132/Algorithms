class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        index =0
        longest = s[0]
        while index<n:
            left = index-1
            right = index+1
            while right<n and s[index] == s[right]:
                if len(longest) < right - index + 1:
                    longest = s[index:right+1]
                right +=1
            
            while left>=0 and right<n and s[right]==s[left]:
                if len(longest) < right - left +1:
                    longest = s[left:right+1]
                left-=1
                right+=1
            index+=1
        return longest

print(Solution.longestPalindrome("","babad"))