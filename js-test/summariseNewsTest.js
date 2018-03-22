var expect = chai.expect;
var assert = chai.assert;

describe('summariseNews', function(){

  const link = 'https://www.theguardian.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin'

  it('returns an API response which has a sentences property', function(){
    return (summariseNews(link)).then(function(result){
      return result.json();
    }).then(function(json){
      expect(json).to.have.property('sentences')
    }).catch(function(error){
      assert.fail(error)
    })
  });

  it('returns an array', function(){
    return(summariseNews(link)).then(function(result){
      return result.json();
    }).then(function(json){
      expect(json.sentences).to.be.instanceof(Array)
    }).catch(function(error){
      assert.fail(error)
    })
  })

  it('returns a summary of the news story', function(){
    return(summariseNews(link)).then(function(result){
      return result.json();
    }).then(function(json){
      expect(json.sentences[0]).to.equal('Donald Trump and Jean-Claude Juncker have broken ranks with western disapproval for Vladimir Putin, issuing their congratulations to the Russian leader for his electoral success even as diplomats were flown out of the UK in retribution for the Salisbury nerve agent attack.')
    }).catch(function(error){
      console.log(error)
      assert.fail(error)
    })
  })

})
