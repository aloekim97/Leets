class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        result = re.sub(r'[^\w\s]', '', s).replace(" ","").replace("_","").lower()
        test = result[::-1]
        if result == test:
            return True
        