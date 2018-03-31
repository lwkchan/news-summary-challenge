var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-fields=thumbnail"
// var url = 'spec/newsstub.json'
window.onload = function () {
  var list = new List()
  var newsView = new NewsView(list)
  var controller = new NewsController(list, newsView)
  return controller.retrieveNews(url)
    .then(function () {
      document.getElementById('list').innerHTML = controller.renderPage()
    }).catch(function (error) {
      console.log(error)
    })
}
