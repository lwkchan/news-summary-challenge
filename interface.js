var list = new List();
// var url = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search';
var url = './js-test/newsstub.json'

  list.getNews(url).then(function(response){

    function summariseArticles(array) {
      var index = 0;
      function next() {
        if (index < array.length) {

            (array[index++].summarise()).then(next());
          }
        }
        next();
      }

    summariseArticles(list.articles);

    console.log(list)
    // for (var i in list.articles){
    //   var article = new Article(list.articles[i]);
    //
    //   var div = document.createElement("div");
    //   div.setAttribute("class", "article")
    //   div.setAttribute("id", "article-" + i);
    //
    //   var headlineLi = document.createElement("li");
    //   var headlineA = document.createElement("a");
    //   headlineA.setAttribute("href", article.url)
    //   var headline = document.createTextNode(article.headline);
    //   headlineA.appendChild(headline);
    //   headlineLi.appendChild(headlineA);
    //   div.appendChild(headlineLi);
    //
    //   var articleImage = document.createElement("img");
    //   articleImage.setAttribute("src", article.imageUrl);
    //   articleImage.setAttribute("id", "image-" + i)
    //   div.appendChild(articleImage);
    //
    //   document.getElementById('list').appendChild(div);
    // }
  }).then(function(result){
    var article = list.articles[1]
    console.log(article.summary)
    console.log(list.articles[1])
  }).catch(function(error){
    console.log(error);
  });
