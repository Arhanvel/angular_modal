import { BankFilterPipe } from './bank-filter.pipe';

describe('BankFilterPipe', () => {
  const pipe = new BankFilterPipe();
  const testItems = [
    {name: 'abc', id: 1},
    {name: 'atest', id: 2},
    {name: 'bbc', id: 3},
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all items', () => {
    expect(pipe.transform(testItems,'','')).toEqual(testItems);
  });

  it('should return items with a', () => {
    expect(pipe.transform(testItems,'a','name')).toEqual([{name: 'abc', id: 1},{name: 'atest', id: 2},]);
  });

  it('should return item with id 3', () => {
    expect(pipe.transform(testItems,'3','id')).toEqual([{name: 'bbc', id: 3},]);
  });

  it('should return no items', () => {
    expect(pipe.transform(testItems,'5','id')).toEqual([]);
  });
});
