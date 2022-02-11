function getFixedValue(value, n) {
    let type = typeof value;
    let _n = n || 0;
    if (type === 'string' || type === 'number') {
        let res = Math.round((+value * Math.pow(10, _n + 1)) / 10) / Math.pow(10, _n);
        return res.toFixed(_n);
    } else {
        return value;
    }
}

var multiply = function (num1, num2) {
    let _num1 = 0
    let _num2 = 0

    for (let i = 0; i < num1.length; i++) {
        _num1 += num1[i] * Math.pow(10, num1.length - i - 1)
    }
    for (let i = 0; i < num2.length; i++) {
        _num2 += num2[i] * Math.pow(10, num2.length - i - 1)
    }

    return getFixedValue(_num1 * _num2,20) + ''
};

console.log(multiply("123456789", "987654321")) // 预期结果 "121932631112635269"
