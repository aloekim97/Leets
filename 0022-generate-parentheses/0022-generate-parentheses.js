/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = (n) => bfs(n);

const bfs = (n, combos = []) => {
    const queue = new Queue([ ['', 0, 0] ]);

    while (!queue.isEmpty()) {/* Time O(2^N) */
        const [ str, open, close ] = queue.dequeue();
        
        const isBaseCase = ((open === n) && (close === n));
        if (isBaseCase) {
            combos.push(str);                                       /* Space O(N) */

            continue;
        }

        const isOpen = open < n;
        if (isOpen) queue.enqueue([ (`${str}(`), (open + 1), close ]); /* Space O(2^N) */

        const isClose = close < open;
        if (isClose) queue.enqueue([ (`${str})`), open, (close + 1) ]);/* Space O(2^N) */
    }

    return combos;
}
