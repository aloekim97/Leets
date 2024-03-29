class Solution(object):
    def leastBricks(self, wall):
        """
        :type wall: List[List[int]]
        :rtype: int
        """
        countGap = { 0 : 0 }    # { Position : Gap count }

        for r in wall:
            total = 0   # Position
            for b in r[:-1]:
                total += b
                countGap[total] = 1 + countGap.get(total, 0)

        return len(wall) - max(countGap.values())  