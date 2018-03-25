var expect = chai.expect;
var newsStub = './newsstub.json'

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
    list.add(article1);
    list.add(article2);
    expect(list.articles).to.include(article1);
    expect(list.articles).to.include(article2);
  })

  it("getNews function adds articles from the api to list.articles", function(){
    return list.getNews(newsStub)
    .then(function(){
      expect(list.articles[0]).to.be.an.instanceof(Article)
    })
  })

  it("generateArticlePromises stores articles in the articleSummaryPromises attribute", function(){
    return list.getNews('./newsstub.json')
    .then(
    list.generateArticlePromises()
    ).then(function(){
      expect(list.articleSummaryPromises.count).to.equal(10)
    })
  })

  it("passing Promises.all on the list.articleSummaryPromises array generates the news summaries", function(){
    return list.getNews('./newsstub.json')
    .then(
    return list.generateArticlePromises()
    )
    .then(function(){
    return Promise.all(list.articleSummaryPromises)
    })
    .then(
      expect(list.articles[0].summary).to.be.an.instanceOf(String)
    )
  })
})
