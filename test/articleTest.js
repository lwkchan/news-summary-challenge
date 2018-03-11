var expect = chai.expect

describe('Article', function(){

  // var article
  //
  // beforeEach(function(){
  //   var jsonString = '{"id":"education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","type":"article","sectionId":"education","sectionName":"Education","webPublicationDate":"2018-03-09T16:29:49Z","webTitle":"Private school teacher banned for using racist language","webUrl":"https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","apiUrl":"https://content.guardianapis.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}';
  //   var jsonObj = JSON.parse(jsonString);
  //   article = new Article(jsonObj);
  // });

  it('is instantiated with a JSON object', function(){
    var jsonString = '{"id":"education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","type":"article","sectionId":"education","sectionName":"Education","webPublicationDate":"2018-03-09T16:29:49Z","webTitle":"Private school teacher banned for using racist language","webUrl":"https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","apiUrl":"https://content.guardianapis.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}';
    var jsonObj = JSON.parse(jsonString);
    var article = new Article(jsonObj);
    expect(article).to.have.property('webTitle');
  });

  // it('webTitle attribute returns a string', function(){
  //   var article = new Article();
  //   expect(article.headline).to.equal('Russian spy attacked');
  // });
});
