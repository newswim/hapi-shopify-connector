import Hapi from 'hapi'
import Joi from 'joi'
import * as Secrets from './secrets'
import routes from './routes'

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
    if (err) {
        console.log(err)
    }
})

server.register(require('hapi-auth-jwt'), function (err) {

      server.auth.strategy('token', 'jwt', {
            key: Secrets.default.CLIENT_SECRET,
            verifyOptions: {
              algorithms: [ 'HS256' ],
              audience: Secrets.default.CLIENT_ID
            }
      })

      // Register all of the routes
      server.route(routes)

})


server.start(err => {
    if (err) {
        // just logging the errors that bubble up to server
        console.log(`Someone sent you this: ${err}`)
    }
    console.log(`Hapi server started at ${server.info.uri}`)
})
