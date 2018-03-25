var list = new List()
// var url = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search';
var url = './js-test/newsstub.json'

list.getNews(url)
.then(function(){
  list.summariseArticles()
})
.then(function(){
    for (var i in list.articles){
    console.log(JSON.stringify(list.articles))
    var article = list.articles[i];

    var div = document.createElement("div");
    div.setAttribute("class", "article")
    div.setAttribute("id", "article-" + i);

    var articleHeadline = document.createElement("li");
    var headlineA = document.createElement("a");
    headlineA.setAttribute("href", article.url)
    var headline = document.createTextNode(article.headline);
    headlineA.appendChild(headline);
    articleHeadline.appendChild(headlineA);
    div.appendChild(articleHeadline);

    var articleImage = document.createElement("img");
    articleImage.setAttribute("src", article.imageUrl);
    articleImage.setAttribute("id", "image-" + i)
    div.appendChild(articleImage);

    var articleSummary = document.createElement("p");
    summary = document.createTextNode(article.summary);
    articleSummary.appendChild(summary)
    div.appendChild(articleSummary)

    document.getElementById('list').appendChild(div);
  }
})
