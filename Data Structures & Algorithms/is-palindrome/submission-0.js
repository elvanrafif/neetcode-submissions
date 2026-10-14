class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const ref = "abcdefghijklmnopqrstuvwxyz0123456789";

        const source = s.toLowerCase()
        let temp = [];
        for (let a = 0; a < source.length; a++) {
            const val = source[a]
            if (ref.includes(val)) {
                temp.push(val);
            }
        }

        const cleaned = temp.join('')

        if (temp.slice().reverse().join('') == cleaned) return true;
        return false;
    }
}
