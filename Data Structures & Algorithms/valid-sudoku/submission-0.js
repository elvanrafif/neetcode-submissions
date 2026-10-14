class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // cek row
        for (let row = 0; row < board.length; row++) {
            const seen = new Set();
            for (let col = 0; col < board[row].length; col++) {
                const val = board[row][col];
                if (val === ".") continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }

        // cek col
        for (let col = 0; col < board.length; col++) {
            const seen = new Set();
            for (let row = 0; row < board.length; row++) {
                const val = board[row][col];
                if (val === ".") continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const seen = new Set();

                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const val = board[boxRow + r][boxCol + c];
                        if (val === ".") continue;
                        if (seen.has(val)) return false;
                        if (!seen.has(val)) {
                            seen.add(val);
                        }
                        // Cek duplikat
                    }
                }
                // Periksa 9 sel dalam kotak ini
            }
        }

        return true;
    }
}
