export function hello(event: any, context: any, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This message is writen by TypeScript.',
      input: event
    })
  };
  
  callback(null, response);
}