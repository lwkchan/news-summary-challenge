var list = new List();
// var url = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search';
var url = './js-test/newsstub.json'

  getNews(url).then(function(result){
    var obj = JSON.parse(result);
    return obj.response;
  }).then(function(response){
    list.add(response.results);
    for (var i in list.articles){
      var article = new Article(list.articles[i]);

      var div = document.createElement("div");
      div.setAttribute("id", "article-" + i);

      var headlineLi = document.createElement("li");
      var headlineA = document.createElement("a");
      headlineA.setAttribute("href", article.url)
      var headline = document.createTextNode(article.headline);
      headlineA.appendChild(headline);
      headlineLi.appendChild(headlineA);

      div.appendChild(headlineLi);

      document.getElementById('articles').appendChild(div);
    }
  }).catch(function(error){
    console.log(error);
  });