import {assert} from 'chai';

describe(`Array`, () => {
  describe(`#typeOf()`, () => {
    it(`is string`, () => {
      assert.typeOf([1, 2, 3], `string`);
    });
  });
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

