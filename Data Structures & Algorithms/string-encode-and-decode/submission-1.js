class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const data = strs.map((item) => `${item.length}#${item}`);
        return data.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // 2#Hi 10#JavaScript2#OK
    decode(str) {
        let arr = [];
        for (let i = 0; i < str.length;) {
            const index = str.indexOf("#", i); //1
            const length = Number(str.slice(i, index)); //2
            const skip = index + 1 + length;
            const clean = str.slice(index + 1, skip);
            arr.push(clean);
            i = skip;
        }
        return arr;
    }
}
