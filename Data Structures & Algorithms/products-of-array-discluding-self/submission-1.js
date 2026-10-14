class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        const outputPrefix = [];

        for (let i = 0; i < nums.length; i++) {
            outputPrefix[i] = prefix;
            prefix = prefix * nums[i]
        }

        let suffix = 1
        const outputSuffix = []

        for (let i = nums.length - 1; i >= 0; i--){
            outputSuffix[i] = suffix
            suffix = suffix * nums[i]
        }

        let answer = []
        for (let i = 0; i < outputPrefix.length; i++){
            let temp = outputPrefix[i] * outputSuffix[i]
            answer.push(temp)
        }

        return answer
    }
}
