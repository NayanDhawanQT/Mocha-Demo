var MyClass = require("../src/myClass.js");
var obj = new MyClass();
var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;

describe.skip("Test Suit", function () {

  it("Test The Add Method", function () {
    expect(obj.add(1,2)).to.be.equal(3);
  });

  it("Spy The Add Method", function () {
    var spy = sinon.spy(obj,"add");
    var arg1 = 10, arg2 = 20;
    obj.callANotherFn(arg1,arg2);
    sinon.assert.calledOnce(spy);
  });

  it("Mock the SayHello Method", function () {
      var mock = sinon.mock(obj);
      var expectations = mock.expects("sayHello");
      expectations.exactly(1);
    obj.callANotherFn(10,20);
    mock.verify();
  });
});

describe.skip("Test Suit for Stub", function () {
    it("Stub the add Method", function () {
        var stub = sinon.stub(obj,"add");
        stub.withArgs(10,20).returns(100);
        expect(obj.add(10,20)).to.be.equal(100);
    });
});

describe("Test the Promise", function(){
  it("Promise Test case", function(done){
    this.timeout(2000);
    obj.testPromise().then(function(result){
      expect(result).to.be.equal(6);
      //expect(false).to.be.true;
      done();
    });
  });
});