import { as_integer, format } from './helpers';

/* Should be as params */
const DECIMAL_SEPARATOR = '.';

export class Decimal {
    constructor(num) {
        this.internal = String(num );
        this.as_int = as_integer(this.internal, DECIMAL_SEPARATOR);
    }

    add = target => {
        const operands = [this, new Decimal(target)];
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
};
