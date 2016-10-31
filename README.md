# serverless-typescript-starter
Serverless framework with TypeScript starter kit

`serverless-typescript-starter` include tools for development of AWS Lambda with TypeScript.  
[serverless](https://serverless.com/), [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) and [ts-loader](https://github.com/TypeStrong/ts-loader) are used to building and deployment.  
[mocha](https://mochajs.org/), [power-assert](https://github.com/power-assert-js/power-assert), [espower-typescript](https://github.com/power-assert-js/espower-typescript) and [sinon](http://sinonjs.org/) are used to unit testing.  

# Usage
## Clone and install npm libraries

```
$ git clone https://github.com/AKIRA-MIYAKE/serverless-typescript-starter.git
$ cd serverless-typescript-starter
$ npm install
```

## Create new function with serverless

```
$ node_modules/.bin/serverless create --template aws-nodejs --path <yourService>
```

## Setup webpack
Create webpack.config.js that configured ts-loader, on your service directory.  
Add plugin definition to serverless.yml

```
plugins:
  - serverless-webpack
```