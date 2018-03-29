var expect = chai.expect

describe('NewsController', function(){

  it('tells the newsView object to render the page with the right headlines', function(){
    var spy = sinon.spy(newsView, 'render');
    expect(spy.calledOnce).to.be(true)
  })

})
