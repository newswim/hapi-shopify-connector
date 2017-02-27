import Hapi from 'hapi'
import Joi from 'joi'

const server = new Hapi.Server()

// there should be something to swap <connection> for prod/dev

server.connection({
  host: 'localhost',
  port: 8080, // +process.env.PORT || 8080,
  // stuff after this is all optional
  router: {isCaseSensitive: false}
})

// Sanitize requests via this Hapi plugin:

server.register({
  register: require('disinfect'),
  options: {
    disinfectQuery: true,
    disinfectParams: true,
    disinfectPayload: true
  }
}, (err) => {
  console.log(err)
})

// Hello-World
server.route({
  path: '/hello/{message?}',
  method: 'GET',
  handler: (request, reply) => {
    // console.log(request)
    reply(`Hello, ${request.params.message}`)
  }
})

// Accept a webhook from Shopify (check the isAuthentic method)

server.route({
  path: '/v1/createOrder',
  method: ['GET', 'PUT', 'POST'],
  config: {
    validate: {
      query: {
        // all of the query params from Shopify should be validated
        // hardwareKey: Joi.string().min(1).required(),
        // serialNum: Joi.string().regex(process.env.SERIAL_NUM_REGEX).required()
        foo: Joi.string()
      }
    }
  },
  handler: (request, reply) => {
    console.log(`Get request from ${request.route.path} with method ${request.route.method}`)
    reply(`You had some params: ${request.query.foo}`) /* .code(200) */
  }
})

// Connect to vTiger
// Take the New Order from shopify and push it into the Sales Orders module

server.start(err => {
  if (err) {
    // just logging the errors that bubble up to server
    console.log(`Someone sent you this: ${err}`)
  }
  console.log(`Server started at ${server.info.uri}`)
})
