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
    var article = sinon.spy();
    list.add(article);
    expect(list.articles.count).to.include(article);
  })
})
