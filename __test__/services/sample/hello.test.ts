import { invokeHandler, generateMockCallback } from 'lambda-utilities'
import { generateDummyAPIGatewayEvent } from 'lamprox'

import { hello } from '../../../src/services/sample/handler'

describe('services/sample/handler', () => {

  describe('hello', () => {

    it('Should return response.', async () => {
      const event = generateDummyAPIGatewayEvent()
      const callback = generateMockCallback((error, result) => {
        callback.once()
        const body = JSON.parse(result.body)
        expect(body.message).toBe('Hello, Lambda!!')
        expect(callback.verify()).toBe(true)
      })

      await invokeHandler(hello, { event, callback })
    })

    it('Should return response when evnet include query string params.', async () => {
      const event = generateDummyAPIGatewayEvent({ queryStringParameters: { "name": "John Doe" }})
      const callback = generateMockCallback((error, result) => {
        callback.once()
        const body = JSON.parse(result.body)
        expect(body.message).toBe('Hello, John Doe!!')
        expect(callback.verify()).toBe(true)
      })

      await invokeHandler(hello, { event, callback })
    })


  })

})
