function Article(jsonObj) {
  this.headline = jsonObj.webTitle;
  this.publicationDate = jsonObj.webPublicationDate;
  this.url = jsonObj.webUrl;
}
