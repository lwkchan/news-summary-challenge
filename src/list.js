function List() {
  this.articles = [];
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

List.prototype.summariseArticles = function(){
  var index = 0;
  var self = this;
  function next() {
    if (index < self.articles.length) {
        (self.articles[index++].summarise()).then(next());
      }
    }
    next();
}
