
import { Precised } from '../precised';

describe('Precised: format method', () => {
  it('Should handle format with thousands separator', () => {
    expect(new Precised(1).format(',')).toEqual('1');
    expect(new Precised(1234567890123456).format(',')).toEqual('1,234,567,890,123,456');
    expect(new Precised(12345678.01234567).format(',')).toEqual('12,345,678.01234567');
  });

  it('Should handle format with float separator', () => {
    expect(new Precised(1234567890123456).format('', '')).toEqual('1234567890123456');
    expect(new Precised(1234567890123456).format('', ',')).toEqual('1234567890123456');
    expect(new Precised(12345678.01234567).format('', ' ')).toEqual('12345678 01234567');
    expect(new Precised(12345678.01234567).format('', '.')).toEqual('12345678.01234567');
    expect(new Precised(0.012345678).format('', ' ')).toEqual('0 012345678');
    expect(new Precised(0.012345678).format('', '.')).toEqual('0.012345678');
  });

  it('Should handle format with thousands separator and float separator', () => {
    expect(new Precised(1234567890123456).format(' ', '')).toEqual('1 234 567 890 123 456');
    expect(new Precised(12345678.01234567).format(' ', ' ')).toEqual('12 345 678.01234567');
    expect(new Precised(12345678.01234567).format(' ', ',')).toEqual('12 345 678,01234567');
    expect(new Precised(0.012345678).format('.', ',')).toEqual('0,012345678');
    expect(new Precised(1234567890.0134).format('.', ',')).toEqual('1.234.567.890,0134');
  });
});
