(function(exports){
  function NewsView(list){
    this.list = list;
  }

  NewsView.prototype.render = function(){
    var list = this.list
    articlesHtml = ""
    for (var i in list.articles){
      var article = list.articles[i];
      var template = [
        `<div class="article" id="article-${i}">`,
        `<li><a href="${article.url}">${article.headline}</a></li>`,
        `<img src="${article.imageUrl}" id="image-${i}">`,
        `<p>${article.summary}</p></div>`
      ];
      articlesHtml += template.join("");
    };
    return articlesHtml
  }

  exports.NewsView = NewsView;

}(this))
