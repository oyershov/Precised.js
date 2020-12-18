import { Precised } from '../precised';

describe('Precised: add', () => {
  it('Should add integers in correct way', () => {
    expect(new Precised(0).add(0)).toEqual('0');
    expect(new Precised(1).add(0)).toEqual('1');
    expect(new Precised(0).add(1)).toEqual('1');
    expect(new Precised(5).add(3)).toEqual('8');
    expect(new Precised(1000000).add(1000000)).toEqual('2000000');
    expect(new Precised(100000000000).add(100000000000)).toEqual('200000000000');
    expect(new Precised(11111111.11111111).add(11111111.11111111)).toEqual('22222222.22222222');
    expect(new Precised(111111111.1111111).add(111111111.1111111)).toEqual('222222222.2222222');
    expect(new Precised('10000000000001.1234').add('10000000000001.1234')).toEqual('20000000000002.2468');
    expect(new Precised('100000000000001.200000000000002').add('100000000000001.200000000000002')).toEqual('200000000000002.400000000000004');
    expect(new Precised('100000000000001.900000000000002').add('100000000000001.200000000000002')).toEqual('200000000000003.100000000000004');
    expect(new Precised('10.200000000000002').add('100000000000001.2000004')).toEqual('100000000000011.400000400000002');
  });

  it('Should add float in correct way', () => {
    expect(new Precised(0.2).add(0.1)).toEqual('0.3');
    expect(new Precised(0.2).add(0.01)).toEqual('0.21');
    expect(new Precised(0.02).add(0.001)).toEqual('0.021');
    expect(new Precised(0.0005).add(0.000000003)).toEqual('0.000500003');
  });
});
