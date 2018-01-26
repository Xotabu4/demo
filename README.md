# Typescript tests against fake API server

This project is for API tests presentation as demo code

In this project i showing POSSIBLE (my vision) of API testing framework that needs to be scaled to big test numbers. It can be overengineering if test number will be low.

In this project i demonstating aproach how Models data objects could be built, how create Models with Builders, how can controllers be used. And as a bonus - possible way to use automatic data validation against documentation (RAMLvalidator) - this can greatly reduce number of assertions in tests, since most of shape assertions will be done automatically.

## API Server
[https://my-json-server.typicode.com/Xotabu4/demo](https://my-json-server.typicode.com/Xotabu4/demo)

Thanks this great tool for such easy API mocking:
[https://my-json-server.typicode.com/](https://my-json-server.typicode.com/)

### RAML file
https://raml.org/

Is written by my own and located:
`./api.raml`

Provides description of what API must looks like.

## Run tests
`npm test`

## Used technologies
- typescript
- ts-node
- mocha
- chai
- allure reports
- raml-parser


## Allure HTML reports
// TODO: wrap to docker container
For reports generation - java is needed.

After tests executed, they put .xml files with results into ./allure-results/ folder

To convert those .xml into .html report - call `npm run report`
After, open ./index.html file in generated ./allure-report folder.

Keep in mind, that report is re-created each time you call `npm run report` - so older reports will be overwritten