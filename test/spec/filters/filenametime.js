'use strict';

describe('Filter: FileNameTime', function () {

  // load the filter's module
  beforeEach(module('isArtApp'));

  // initialize a new instance of the filter before each test
  var FileNameTime;
  beforeEach(inject(function ($filter) {
    FileNameTime = $filter('FileNameTime');
  }));

  it('should return the input prefixed with "FileNameTime filter:"', function () {
    var text = 'angularjs';
    expect(FileNameTime(text)).toBe('FileNameTime filter: ' + text);
  });

});
