# News Summary challenge

Completed this as sixth weekend challenge at Makers Academy. Hosted on https://lwkchan.github.io/news-summary-challenge/. Please note that the API is quite slow, so might take a little while to load.

## How to use

Prerequisites - ensure you have Node and [http-server](https://www.npmjs.com/package/http-server). To run feature tests, you will need need selenium-webdriver, geckodriver and the Firefox browser if you want to run the feature tests (I used these on my own machine, but feel free to use alternatives).

1. Clone this repo
2. In the command line, change into this repo and run ```http-server```
3. Visit http://127.0.0.1:8080 in your browser. *NB - the APIs are quite slow, so expect to wait a few generous seconds for the page to load*

### To test

* To test units, open unitTestRunner.html in your browser. *NB - the APIs are quite slow, so a couple of the tests might time out before they pass*
* To test features, run ```bundle``` to install the necessary Ruby gems for testing. Next, run ```http-server``` or ```node_modules/http-server/bin/http-server ``` in your command line. Open another tab in your command line and run ```rspec```

## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```
## My approach

1. I first diagrammed out what how I wanted my program to interact with the user and with the APIs.

```
user                           program                               API
  |                               |                                   |
  |      opens                    |      requests for articles        |
  | ----------------------------->|---------------------------------->|
  |      shows articles to        |      responds with article info   |
  |<------------------------------|<----------------------------------|
  |                               |                                   |
```
2. Next I modelled out how I wanted my program to work. The key things to remember are
      * each article various attributes that we want the users to see
      * each article has a unique url for its own summary. To generate this summary, the program has to send a GET request to each url
      * the articles as a group need to be stored somewhere
3. I started by writing a feature test for what I expected the user to see on index.html
4. I next test-drove the development of the article and list models. Starting with the easiest feature to add, and moving onto the harder features (i.e. starting with adding headlines, then images, then summaries from the Aylien API)
5. Although I had finished most of my work by this time, and the user would have seen a finished product, I felt that I needed to refactor my code into an MVC framework in order to separate concerns. So, I test-drove the creation of a controller and a view, then refactored the code from interface.js into newsController.js and newsView.js.
6. Finally, I added CSS to the page to make it more presentable.


## Key learnings

* Asynchronous functions in JavaScript - namely Promises - and methods of testing these
* Working with APIs
* Mocha testing framework - with Chai assertions
* Halfway into working on this project, I found that I could use the JavaScript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to fetch resources from APIs (i.e. doing the same thing as the XMLHttpRequest in getNews.js). As such, you'll see that I used the Fetch API in article.summarise() in article.js to test out its functionality. I learned that the Fetch API is a simpler way to connect to APIs generally

## To complete

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```
```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```
