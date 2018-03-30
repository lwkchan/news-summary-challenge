(function (exports) {
  function Article (jsonObj) {
    this.headline = jsonObj.webTitle
    this.publicationDate = jsonObj.webPublicationDate
    this.url = jsonObj.webUrl
    this.imageUrl = jsonObj.fields.thumbnail
    this.summary
  };

  Article.prototype.summarise = function () {
    var self = this
    var requestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + this.url
    return fetch(requestUrl)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        self.summary = json.sentences[0]
      }).catch(function (error) {
        console.log(error)
      })
  }

  exports.Article = Article
}(this))
