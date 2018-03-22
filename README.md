# News Summary challenge

Completed this as sixth weekend challenge at Makers Academy. Hosted on https://lwkchan.github.io/news-summary-challenge/. Please note that the API is quite slow, so might take a little while to load.

## How to use

Prerequisite - ensure you have Node and the Bundler Ruby gem on your machine. You will also need selenium-webdriver if you want to run the feature tests.

1. Clone this repo
2. In the command line, change into this repo and run ```http-server``` or ```node_modules/http-server/bin/http-server ```
3. Visit http://127.0.0.1:8080 in your browser.

### To test

* To test units, open unitTestRunner.html in your browser.
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
## My approach

1. I first diagrammed out what how I wanted my program to interact with the user and with the Guardian API.

```
client                program                  API
  |                      |                      |
  |      request         |      request         |
  | -------------------->|--------------------->|
  |      response        |       response       |
  |<---------------------|<---------------------|
  |                      |                      |
```
2. Next I modelled out how I wanted my program to work. The most important thing here is that
      * the articles have various attributes that we want the users to see
      * the articles as a group need to be stored somewhere

3. I started coding the view the users would see in index.html. Then, I test-drove the development of the list and article models.

4. Next, I test drove a method which sent the API request.

5. Now that the API response came back to the program, I was able to render the view to pass my feature tests.


## Key learnings

* Asynchronous functions in JavaScript - namely Promises - and methods of testing these
* Working with APIs
* Mocha testing framework - with Chai assertions
* After further research into XML Http Requests, found that I could have alternatively used the JavaScript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to do the same thing as getNews.js.

## To complete

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

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
