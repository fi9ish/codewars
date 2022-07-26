var maxSequence = function (arr) {
    let best_sum = 0
    let current_sum = 0
    for (i in arr) {
        current_sum = Math.max(0, current_sum+arr[i])
        best_sum = Math.max(best_sum, current_sum)
    }
    return best_sum
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
