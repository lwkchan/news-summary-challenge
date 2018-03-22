function getNews(url){
  return new Promise(function(resolve,reject){
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function(){
      if (req.status == 200){
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

function summariseNews(url){
  var requestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url;
  return fetch(requestUrl);
}
