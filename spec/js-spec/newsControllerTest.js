var expect = chai.expect
var url = 'spec/newsstub.json'

describe('NewsController', function () {
  var newsController

  beforeEach(function () {
    var mockList = {
      getNews: function () {
        return Promise.resolve('News retrieved')
      },
      generateSummaryPromises: function () {
        return Promise.resolve('Summary promises Generated')
      }
    }
    mockList.articleSummaryPromises = [Promise.resolve('Summary1 retrieved'), Promise.resolve('Summary2 retrieved')]
    var mockNewsView = { render: function () { return 'Rendered' } }
    newsController = new NewsController(mockList, mockNewsView)
  })

  it('tells the newsView object to render the page with the right headlines', function () {
    expect(newsController.renderPage()).to.equal('Rendered')
  })

  it('retrieves the news from specified url and retrieves article summaries', function () {
    return newsController.retrieveNews(url)
      .then(function (result) {
        expect(result).to.contain('Summary1 retrieved')
        expect(result).to.contain('Summary2 retrieved')
      })
  })
})
