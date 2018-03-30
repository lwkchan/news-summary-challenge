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

// console.log(JSON.stringify(list.articles[1]))
// console.log(2, list.articles)
// for (var i in list.articles){
// var article = list.articles[i];
//
// var div = document.createElement("div");
// div.setAttribute("class", "article")
// div.setAttribute("id", "article-" + i);
//
// var articleHeadline = document.createElement("li");
// var headlineA = document.createElement("a");
// headlineA.setAttribute("href", article.url)
// var headline = document.createTextNode(article.headline);
// headlineA.appendChild(headline);
// articleHeadline.appendChild(headlineA);
// div.appendChild(articleHeadline);
//
// var articleImage = document.createElement("img");
// articleImage.setAttribute("src", article.imageUrl);
// articleImage.setAttribute("id", "image-" + i)
// div.appendChild(articleImage);
//
// var articleSummary = document.createElement("p");
// summary = document.createTextNode(article.summary);
// articleSummary.appendChild(summary)
// div.appendChild(articleSummary)
//
// document.getElementById('list').appendChild(div);
