# serverless-typescript-starter
Serverless framework with TypeScript starter kit

`serverless-typescript-starter` include tools for development of AWS Lambda with TypeScript.

* AWS Lambda
  * [Serverless Framework](https://serverless.com/)
* TypeScript
  * [serverless-webpack](https://github.com/elastic-coders/serverless-webpack)
  * [webpack](https://webpack.github.io/)
  * [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader) are used to building and deployment.
* Testing
  * [mocha](https://mochajs.org/)
  * [power-assert](https://github.com/power-assert-js/power-assert)
  * [espower-typescript](https://github.com/power-assert-js/espower-typescript)
* Useful frameworks
  * [node-lambda-utilities](https://github.com/AKIRA-MIYAKE/node-lambda-utilities)
  * [laprox](https://github.com/AKIRA-MIYAKE/lamprox)


# Usage
## Setup
### Clone project

```
$ git clone https://github.com/AKIRA-MIYAKE/serverless-typescript-starter.git
$ cd serverless-typescript-starter
```

### Prepare .env

```
$ cp .env.sample .env
```

Update `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` with your own value.

### Setup Docker image

```
$ ENV_FILE=.env docker-compose build
```

### npm install

```
$ ENV_FILE=.env docker-compose run --rm serverless npm install
```

## Develop
See Serverless Framework documents and refer to `/src/services/sample`.

When executing the command, use the container's bash.

```
$ ENV_FILE=.env docker-compose run --rm serverless bash
```
