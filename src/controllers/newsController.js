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
    return list.getNews(url).then(function(){
        return list.generateSummaryPromises()
      }).then(function(){
        return Promise.all(list.articleSummaryPromises)
      }).catch(function(error){
        console.log(error)
      })
    },

  exports.NewsController = NewsController;

}(this))
