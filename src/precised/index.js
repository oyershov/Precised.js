import { as_integer, format, addTrailingZeros } from './helpers';

/* Should be as params */
const DECIMAL_SEPARATOR = '.';

export class Precised {
    constructor(num = 0) {
        this.internal = String(+num);
        this.as_int = as_integer(this.internal, DECIMAL_SEPARATOR);
    }

    add = target => {
        const operands = [this, new Precised(target)];
        operands.sort((x, y) => { return x.as_int.exp - y.as_int.exp });

        const smallest = operands[0].as_int.exp;
        const biggest = operands[1].as_int.exp;

        const x = Number(format(operands[1].as_int.value, biggest - smallest, DECIMAL_SEPARATOR));
        const y = Number(operands[0].as_int.value);

        const result = String(x + y);

        return format(result, smallest, DECIMAL_SEPARATOR);
    };

    sub = target => {
        return this.add(target * -1);
    };

    precise = (precision = 0) => {
        const tokens = this.internal.split(DECIMAL_SEPARATOR);

        if (tokens[1] !== undefined) {
            tokens[1] = tokens[1].slice(0, precision);
        } else {
            if (precision > 0) {
                tokens.push('');
            }
        }

        if (tokens[1] !== undefined) {
            tokens[1] = addTrailingZeros(tokens[1], precision);
        }

        return tokens[1] ? tokens.join(DECIMAL_SEPARATOR) : tokens[0];
    }

    format = (thousSep, floatSep) => {
        const fs = thousSep === floatSep ? '.' : floatSep;
        let res = this.internal;
    
        if (thousSep !== fs) {
            if (fs) {
                res = String(res.replace('.', fs));
            }

            if ((thousSep && fs) || (thousSep && !fs && thousSep !== '.')) {
                const tokens = res.split(fs || '.');
                tokens[0] = tokens[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousSep);
                res = tokens.join(fs || '.');
            }
        }

        return res;
    };
};
