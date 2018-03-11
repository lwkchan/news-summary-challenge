var expect = chai.expect;

describe('List', function(){
  it('should be instantiated with an array, which will be passed it its articles attribute', function(){
    var list = new List([]);
    expect(list.articles).to.equal([]);
  });
})
