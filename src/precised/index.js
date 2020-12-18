import { as_integer, format, addTrailingZeros, separate_internal, zero } from './helpers';

/* Default constants */
const DEC_SEP = '.'; // decimal separator

export class Precised {
    constructor(num = 0) {
        this.internal = String(num || 0);
        [this.integer, this.fractional] = separate_internal(this.internal, DEC_SEP);
    }

    add = target => {
        const operands = [this, new Precised(target)];
        const fractional_max_length = Math.max(operands[0].fractional.length, operands[1].fractional.length);
        const formatted_first_fractional = operands[0].fractional + zero(fractional_max_length - operands[0].fractional.length);
        const formatted_second_fractional = operands[1].fractional + zero(fractional_max_length - operands[1].fractional.length);

        let sum_integer = String(Number(operands[0].integer) + Number(operands[1].integer));
        let sum_fractional = String(+formatted_first_fractional + +formatted_second_fractional);

        if (String(sum_fractional).length > fractional_max_length) {
            sum_integer = String(Number(sum_integer) + 1);
            sum_fractional = sum_fractional.slice(1);
        }

        let result = sum_integer;

        if (+sum_fractional) {
            sum_fractional = zero(fractional_max_length - sum_fractional.length) + sum_fractional;
            result = [sum_integer, sum_fractional].join(DEC_SEP);
        }
    
        return result;
    };

    sub = target => {
        return this.add(target * -1);
    };

    precise = (precision = 0, floatSep) => {
        const tokens = this.internal.split(floatSep || DEC_SEP);

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

        return tokens[1] ? tokens.join(floatSep || DEC_SEP) : tokens[0];
    }

    format = (thousSep, floatSep) => {
        const fs = thousSep === floatSep ? DEC_SEP : floatSep;
        let res = this.internal;
    
        if (thousSep !== fs) {
            if (fs) {
                res = String(res.replace(DEC_SEP, fs));
            }

            if ((thousSep && fs) || (thousSep && !fs && thousSep !== DEC_SEP)) {
                const tokens = res.split(fs || DEC_SEP);
                tokens[0] = tokens[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousSep);
                res = tokens.join(fs || DEC_SEP);
            }
        }

        return res;
    };
};
