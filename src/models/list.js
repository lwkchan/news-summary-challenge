function List() {
  this.articles = [];
  this.articleSummaryPromises = []
}

List.prototype.add = function(article){
  this.articles.push(article);
}

List.prototype.getNews = function(url){
  var list = this;
  return new Promise(function(resolve,reject){
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function(){
      if (req.status == 200){
        var data = JSON.parse(req.response)
        data.response.results.forEach(function(result) {
          list.add(new Article(result));
        });
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function(){
      reject(Error("Network Error"))
    };

    req.send();
  });
}

List.prototype.generateSummaryPromises = function(){
  var list = this;
  for (var i in list.articles){
    var promise = list.articles[i].summarise();
    list.articleSummaryPromises.push(promise)
  }
}
