(function(exports){
  function NewsController(list, newsView) {
    this.list = list;
    this.newsView = newsView;
  };

  NewsController.prototype.renderPage = function(){
    return this.newsView.render();
  };

  NewsController.prototype.retrieveNews = function(url){
    var list = this.list
    var newsView = this.newsView
    return new Promise(function(resolve){
      list.getNews(url).then(function(){
        return list.generateSummaryPromises()
      }).then(function(summaryPromises){
        resolve(summaryPromises)
      }).catch(function(error){
        reject(error)
      })
    })
  }

  exports.NewsController = NewsController;

}(this))
