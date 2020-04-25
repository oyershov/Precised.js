import { Decimal } from '../decimal';

describe('Decimal: add', () => {
  it('Should add integers in correct way', () => {
    // expect(new Decimal(0).add(0)).toEqual('0');
    expect(new Decimal(1).add(0)).toEqual('1');
    expect(new Decimal(0).add(1)).toEqual('1');
    expect(new Decimal(5).add(3)).toEqual('8');
    expect(new Decimal(1000000).add(1000000)).toEqual('2000000');
    expect(new Decimal(100000000000).add(100000000000)).toEqual('200000000000');
    expect(new Decimal(11111111.11111111).add(11111111.11111111)).toEqual('22222222.22222222');
    expect(new Decimal(111111111.1111111).add(111111111.1111111)).toEqual('222222222.2222222');
    expect(new Decimal(10000000000001.1234).add(10000000000001.1234)).toEqual('20000000000002.2468');
  });

  it('Should add float in correct way', () => {
    expect(new Decimal(0.2).add(0.1)).toEqual('0.3');
    expect(new Decimal(0.2).add(0.01)).toEqual('0.21');
    expect(new Decimal(0.02).add(0.001)).toEqual('0.021');
    expect(new Decimal(0.0005).add(0.000000003)).toEqual('0.000500003');
  });
});
