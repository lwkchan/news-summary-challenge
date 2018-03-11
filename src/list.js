function List() {
  this.articles = [];
}

List.prototype.add = function(articles){
  for (var i in articles){
    this.articles.push(articles[i]);
  }
}
