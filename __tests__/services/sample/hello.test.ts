import { Handler } from 'aws-lambda'
import { invokeHandler, generateMockCallback } from 'lambda-utilities'
import { generateDummyAPIGatewayEvent } from 'lamprox'

import { hello } from '../../../src/services/sample/handler'

describe('services/sample/handler', () => {

  describe('hello', () => {

    it('Should return response.', done => {
      const event = generateDummyAPIGatewayEvent()
      const callback = generateMockCallback((error, result: any) => {
        callback.once()
        const body = JSON.parse(result.body)
        expect(body.message).toBe('Hello, Lambda!!')
        expect(callback.verify()).toBe(true)

        done()
      })

      invokeHandler(hello as Handler, { event, callback })
    })

    it('Should return response when evnet include query string params.', done => {
      const event = generateDummyAPIGatewayEvent({ queryStringParameters: { "name": "John Doe" }})
      const callback = generateMockCallback((error, result: any) => {
        callback.once()
        const body = JSON.parse(result.body)
        expect(body.message).toBe('Hello, John Doe!!')
        expect(callback.verify()).toBe(true)

        done()
      })

      invokeHandler(hello as Handler, { event, callback })
    })


  })

})
