var expect = chai.expect;

describe('List', function(){
  it('should contain an array in its "articles" attribute', function(){
    var list = new List();
    expect(list.articles).to.be.an.instanceof(Array);
  });
})
