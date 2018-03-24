
function summariseNews(url){
  var requestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url;
  return fetch(requestUrl);
}
