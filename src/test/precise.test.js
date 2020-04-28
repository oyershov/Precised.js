import { Decimal } from '../decimal';

describe('Decimal: precise', () => {
  it('Should handle float number', () => {
    expect(new Decimal(1).precise(2)).toEqual('1.00');
    expect(new Decimal(100500.19).precise(1)).toEqual('100500.1');
    expect(new Decimal(1.123456789).precise(6)).toEqual('1.123456');
    expect(new Decimal(0.020006).precise(2)).toEqual('0.02');
    expect(new Decimal(0.020006).precise(0)).toEqual('0');
  });

  it('Should handle string values', () => {
    expect(new Decimal('1').precise(2)).toEqual('1.00');
    expect(new Decimal('100500.19').precise(1)).toEqual('100500.1');
    expect(new Decimal('1.123456789').precise(6)).toEqual('1.123456');
    expect(new Decimal('0.020006').precise(2)).toEqual('0.02');
    expect(new Decimal('0.020006').precise(0)).toEqual('0');
  });

  it('Should handle empty values', () => {
    expect(new Decimal().precise()).toEqual('0');
    expect(new Decimal().precise(8)).toEqual('0.00000000');
    expect(new Decimal(null).precise(8)).toEqual('0.00000000');
    expect(new Decimal('').precise(8)).toEqual('0.00000000');
    expect(new Decimal(0).precise(0)).toEqual('0');
    expect(new Decimal(0).precise(16)).toEqual('0.0000000000000000');
  });

  it('Should handle invalid values', () => {
    expect(new Decimal().precise(-1)).toEqual('0');
    expect(new Decimal(-1).precise(-1)).toEqual('-1');
    expect(new Decimal('abc').precise(2)).toEqual('NaN.00');
    expect(new Decimal('a1.b2').precise(0)).toEqual('NaN');
  });

  it('Should handle big values', () => {
    expect(new Decimal(1000000000000016).precise(2)).toEqual('1000000000000016.00');
    expect(new Decimal(10000008.10040008).precise(4)).toEqual('10000008.1004');
    expect(new Decimal(100000000012.1004).precise(8)).toEqual('100000000012.10040000');
  });
});
