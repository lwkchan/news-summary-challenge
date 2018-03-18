var expect = chai.expect;

describe('List', function(){

  var list;

  beforeEach(function(){
    list = new List();
  });


  it('is instantiated with an articles attribute, which is an array', function(){
    expect(list.articles).to.be.an.instanceof(Array);
  });

  it('add() adds the specified object to the articles array', function(){
    var article1 = sinon.spy();
    var article2 = sinon.spy();
    list.add([article1, article2]);
    expect(list.articles).to.include(article1);
    expect(list.articles).to.include(article2);
  })
})
