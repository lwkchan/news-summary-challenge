var expect = chai.expect;
var assert = chai.assert;

describe('summariseNews', function(){

  const link = 'https://www.theguardian.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin'

  it('returns a promise', function(){
    expect(summariseNews(link)).to.be.an.instanceof(Promise)
  });

  describe('the API response', function(){

    it('returns an API response which has a sentences property', function(){
      return(summariseNews(link)).then(function(result){
        expect(result).to.have.property('sentences')
      }).catch(function(error){
        assert.fail(error)
      })
    });

    it('the sentences property is an array of strings', function(){
      return(summariseNews(link)).then(function(result){
        return result.sentences
      }).then(function(sentences){
        expect(sentences).to.be.instanceof(Array);
        for(var i in sentences){
          expect(sentences[i]).to.be.instanceof(String)
        }
      }).catch(function(error){
        assert.fail(error)
      })
    })

  })

})
