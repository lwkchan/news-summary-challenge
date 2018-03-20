var expect = chai.expect

describe('Article', function(){

  var article
  beforeEach(function(){
    var jsonString = '{"id":"uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2018-03-20T19:44:07Z","webTitle":"Trump and Juncker under fire for hailing Putin election victory","webUrl":"https://www.theguardian.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin","apiUrl":"https://content.guardianapis.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin","fields":{"thumbnail":"https://media.guim.co.uk/92f774b19c5c2307522a571c68804ea581c596c7/0_153_4777_2866/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}'
    var jsonObj = JSON.parse(jsonString);
    console.log(jsonObj);
    article = new Article(jsonObj);
  });

  it('headline attribute returns a string denoting the article headline', function(){
    expect(article.headline).to.equal("Trump and Juncker under fire for hailing Putin election victory");
  });

  it('publicationDate attribute returns a string denoting when the article was published', function(){
    expect(article.publicationDate).to.equal("2018-03-20T19:44:07Z")
  });

  it('url attribute returns a string denoting the article url', function(){
    expect(article.url).to.equal("https://www.theguardian.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin")
  });

  it('imageUrl attribute returns a string denoting the article image thumbnail source', function(){
    expect(article.imageUrl).to.equal('https://media.guim.co.uk/92f774b19c5c2307522a571c68804ea581c596c7/0_153_4777_2866/500.jpg')
  })
});
