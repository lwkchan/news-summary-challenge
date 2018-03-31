var expect = chai.expect

describe('NewsView', function () {
  var newsView

  beforeEach(function () {
    MockArticle = function () {
      this.headline = 'Headline'
      this.url = 'www.example.com'
    }
    var mockArticle1 = new MockArticle()
    var mockArticle2 = new MockArticle()
    MockList = function (article1, article2) {
      this.articles = [article1, article2]
    }
    var mockList = new MockList(mockArticle1, mockArticle2)
    newsView = new NewsView(mockList)
  })

  it('render an html string which includes the headline details', function () {
    var render = newsView.render()
    console.log(render)
    expect(render).to.contain('Headline')
    expect(render).to.contain('www.example.com')
  })
})
