import * as assert from 'power-assert'

import { invokeHandler, generateMockCallback } from 'lambda-utilities'
import { generateDummyAPIGatewayEvent } from 'lamprox'

import { hello } from '../../../src/services/sample/handler'

describe('services/sample/handler', () => {

  describe('hello', () => {

    it('Should return response.', done => {
      const event = generateDummyAPIGatewayEvent()
      const callback = generateMockCallback((error, result) => {
        callback.once()
        const body = JSON.parse(result.body)
        assert.equal(body.message, 'Hello, Lambda!!')
        assert.ok(callback.verify())
        done()
      })

      invokeHandler(hello, { event, callback })
    })

    it('Should return response when evnet include query string params.', done => {
      const event = generateDummyAPIGatewayEvent({ queryStringParameters: { "name": "John Doe" }})
      const callback = generateMockCallback((error, result) => {
        callback.once()
        const body = JSON.parse(result.body)
        assert.equal(body.message, 'Hello, John Doe!!')
        assert.ok(callback.verify())
        done()
      })

      invokeHandler(hello, { event, callback })
    })


  })

})
