var expect = chai.expect

describe('Article', function(){
  it('has a headline attribute', function(){
    var article = new Article;
    expect(article.to.respondTo('headline'));
  })
});
