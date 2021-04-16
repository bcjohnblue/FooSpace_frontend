import checkout from '../helpers/checkout';

const test1 = {
  samples: ['003', '002', '003', '003', '004'],
  result: 232.5
};

test('Test 5 products with 2 SecondItem50PercentOff + 3 MoreThen3ItemDiscount', () => {
  expect(checkout(test1.samples)).toEqual(test1.result);
});

const test2 = {
  samples: [
    '003',
    '002',
    '003',
    '003',
    '002',
    '002',
    '002',
    '002',
    '001',
    '004'
  ],
  result: 427.5
};

test('Test 10 products with 6 SecondItem50PercentOff + 3 MoreThen3ItemDiscount + 1 None', () => {
  expect(checkout(test2.samples)).toEqual(test2.result);
});

const test3 = {
  samples: ['003', '002', '003', '003', '004', '0000'],
  result: 232.5
};

test('Test 6 products with 2 SecondItem50PercentOff + 3 MoreThen3ItemDiscount + 1 Not Exist', () => {
  expect(checkout(test3.samples)).toEqual(test3.result);
});
