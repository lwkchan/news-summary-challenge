var expect = chai.expect

describe('NewsController', function(){

  var newsController

  beforeEach(function(){
    var mockList = {
      getNews: function(){
         return Promise.resolve('News retrieved')
       },
       generateSummaryPromises: function(){
         return Promise.resolve('Summary promises Generated')
       }
     };
    var mockNewsView = { render: function(){ return "Rendered" } };
    newsController = new NewsController(mockList, mockNewsView)
  })

  it('tells the newsView object to render the page with the right headlines', function(){
    expect(newsController.renderPage()).to.equal("Rendered");
  })

  it('retrieves the news from specified url and generates promises for retrieving article summaries', function(){
    var url = 'spec/js-spec/newsstub.json';
    return newsController.retrieveNews(url)
    .then(function(result){
      expect(result).to.equal("Summary promises Generated")
    })
  })
})
