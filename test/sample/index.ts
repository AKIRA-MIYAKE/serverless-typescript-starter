import * as assert from 'power-assert';
import * as sinon from 'sinon';

import { hello } from '../../sample/handler';


describe('sample', () => {  
  describe('handler', () => {
    
    describe('hello', () => {
      
      it('Should invoke callback with lambda proxy response', () => {
        const callback = sinon.spy();
        
        hello(null, null, callback);
        assert.ok(callback.calledOnce);
        assert.equal(callback.getCall(0).args[0], null);
        assert.equal(callback.getCall(0).args[1].statusCode, 200);
        
        callback.reset();
      });
      
    });
    
  });
});