const as_integer = (number, DECIMAL_SEPARATOR) => {
    number = String(number);

    let value,
        exp,
        tokens = number.split(DECIMAL_SEPARATOR),
        integer = tokens[0],
        fractional = tokens[1];

    if(!fractional) {
        var trailing_zeros = integer.match(/0+$/);

        if(trailing_zeros) {
            var length = trailing_zeros[0].length;
            value = integer.substr(0, integer.length - length);
            exp = length;
        } else {
            value = integer;
            exp = 0;
        }
    } else {
        value = parseInt(number.split(DECIMAL_SEPARATOR).join(''), 10);
        exp = fractional.length * -1;
    }

    return {
        'value': value,
        'exp': exp
    };
};

const neg_exp = (str, position, DECIMAL_SEPARATOR) => {
    position = Math.abs(position);

    var offset = position - str.length;
    var sep = DECIMAL_SEPARATOR;

    if(offset >= 0) {
        str = zero(offset) + str;
        sep = '0.';
    }

    var length = str.length;
    var head = str.substr(0, length - position);
    var tail = str.substring(length  - position, length);

    return head + sep + tail;
};

const pos_exp = (str, exp, DECIMAL_SEPARATOR) => {
    const zeros = zero(exp);

    return String(str + zeros);
};

const format = (num, exp, DECIMAL_SEPARATOR) => {
    num = String(num);
    const func = exp >= 0 ? pos_exp : neg_exp;

    return func(num, exp, DECIMAL_SEPARATOR);
};

const zero = function(exp) {
    return exp ? new Array(exp + 1).join('0') : '';
};

const addTrailingZeros = (targetString, precision) => {
    if (targetString.length < precision) {
        return addTrailingZeros(`${targetString}0`, precision);
    }

    return targetString;
}

const separate_internal = (number, DECIMAL_SEPARATOR) => {
    number = String(number);

    let tokens = number.split(DECIMAL_SEPARATOR),
        integer = tokens[0],
        fractional = tokens[1] || 0;

    return [integer, fractional];
}

export {
    addTrailingZeros,
    as_integer,
    format,
    neg_exp,
    pos_exp,
    separate_internal,
    zero,
}
