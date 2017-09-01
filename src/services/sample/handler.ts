import { lamprox } from 'lamprox'

export interface HelloResponseBody {
  message: string
}

export const hello = lamprox<HelloResponseBody>((ambience) => {
  const event = ambience.lambda.event
  const queryStringParams = (event.queryStringParameters)
    ? event.queryStringParameters
    : {}

  const name = (typeof queryStringParams.name !== 'undefined')
    ? queryStringParams.name
    : 'Lambda'

  const message = `Hello, ${name}!!`

  return Promise.resolve({ message })
})
