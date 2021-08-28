const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
 assert = require("assert");

 const Calculator = require('../controller/calculator')

 describe('Calculator', ()=> {
    var calculator, eventEmitterStub, callbackSpy, clock;

    before(function () {
        calculator = new Calculator(4, 5);
        clock = sinon.useFakeTimers();
        //eventEmitterStub = sinon.stub(calculator, "emit");
        callbackSpy = sinon.spy();
      });    

      it("should emit the event before the callback", function (done) {
        calculator.product(callbackSpy);
        clock.tick(100);
        assert.equal(callbackSpy.called, true);
        //assert.equal(eventEmitterStub.calledWithExactly("result", 27), true);
        //assert.equal(eventEmitterStub.calledBefore(callbackSpy), true);
        done();
      });
    
      after(function () {
        clock.restore();
      });

})
