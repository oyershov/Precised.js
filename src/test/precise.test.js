
import { Precised } from '../precised';

describe('Precised: precise method', () => {
  it('Should handle float number', () => {
    expect(new Precised(1).precise(2)).toEqual('1.00');
    expect(new Precised(100500.19).precise(1)).toEqual('100500.1');
    expect(new Precised(1.123456789).precise(6)).toEqual('1.123456');
    expect(new Precised(0.020006).precise(2)).toEqual('0.02');
    expect(new Precised(0.020006).precise(0)).toEqual('0');
  });

  it('Should handle value with custom decimal separator', () => {
    expect(new Precised(1).precise(2, ',')).toEqual('1,00');
    expect(new Precised('100500 19').precise(1, ' ')).toEqual('100500 1');
    expect(new Precised('10005 1234').precise(3, ' ')).toEqual('10005 123');
    expect(new Precised('0,020006').precise(2, ',')).toEqual('0,02');
    expect(new Precised('0 020006').precise(0, ' ')).toEqual('0');
  });

  it('Should handle string values', () => {
    expect(new Precised('1').precise(2)).toEqual('1.00');
    expect(new Precised('100500.19').precise(1)).toEqual('100500.1');
    expect(new Precised('1.123456789').precise(6)).toEqual('1.123456');
    expect(new Precised('0.020006').precise(2)).toEqual('0.02');
    expect(new Precised('0.020006').precise(0)).toEqual('0');
  });

  it('Should handle empty values', () => {
    expect(new Precised().precise()).toEqual('0');
    expect(new Precised().precise(8)).toEqual('0.00000000');
    expect(new Precised(null).precise(8)).toEqual('0.00000000');
    expect(new Precised('').precise(8)).toEqual('0.00000000');
    expect(new Precised(0).precise(0)).toEqual('0');
    expect(new Precised(0).precise(16)).toEqual('0.0000000000000000');
  });

  it('Should handle invalid values', () => {
    expect(new Precised().precise(-1)).toEqual('0');
    expect(new Precised(-1).precise(-1)).toEqual('-1');
    expect(new Precised('abc').precise(2)).toEqual('abc.00');
    expect(new Precised('a1.b2').precise(0)).toEqual('a1');
  });

  it('Should handle big values', () => {
    expect(new Precised(1000000000000016).precise(2)).toEqual('1000000000000016.00');
    expect(new Precised(10000008.10040008).precise(4)).toEqual('10000008.1004');
    expect(new Precised(100000000012.1004).precise(8)).toEqual('100000000012.10040000');
  });
});
