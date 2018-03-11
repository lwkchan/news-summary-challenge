var expect = chai.expect

describe('Article', function(){

  var article
  beforeEach(function(){
    var jsonString = '{"id":"education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","type":"article","sectionId":"education","sectionName":"Education","webPublicationDate":"2018-03-09T16:29:49Z","webTitle":"Private school teacher banned for using racist language","webUrl":"https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","apiUrl":"https://content.guardianapis.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}';
    var jsonObj = JSON.parse(jsonString);
    article = new Article(jsonObj);
  });

  it('headline attribute returns a string denoting the article headline', function(){
    expect(article.headline).to.equal('Private school teacher banned for using racist language');
  });

  it('publicationDate attribute returns a string denoting when the article was published', function(){
    expect(article.publicationDate).to.equal("2018-03-09T16:29:49Z")
  });

  it('url attribute returns a string denoting the article url', function(){
    expect(article.url).to.equal("https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language")
  });
});
