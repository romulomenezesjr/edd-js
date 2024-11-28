const matrix = function(n, m, initial=0) {
    let arr = [];
    for (let i = 0; i < n; ++i) {
       arr[i] = new Array(m)
       arr[i].fill(initial)
    }
    return arr;
    }

const m = matrix(2,2)
console.log(m)