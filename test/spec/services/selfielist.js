'use strict';

describe('Service: SelfieList', function () {

  // load the service's module
  beforeEach(module('isArtApp'));

  // instantiate service
  var SelfieList;
  beforeEach(inject(function (_SelfieList_) {
    SelfieList = _SelfieList_;
  }));

  it('should do something', function () {
    expect(!!SelfieList).toBe(true);
  });

});
