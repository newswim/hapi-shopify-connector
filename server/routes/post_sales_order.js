/*

    This route will
    1.) Accept POST requests from Shopify's CreateOrder webhook
    2.) Push the body of the request into vTiger's Sales Order module
    3.) Validate the request according with a secret key (that we'll generate and store)
    4.) Check that the request body conforms to the fields we're saving
        a.) Make necessary changes to the payload before pushing to vTiger

*/

import Joi from 'joi'
import Boom from 'boom'
import * as Secrets from '../secrets'
import VTiger from '../lib/vtiger'


// http://stackoverflow.com/questions/36125736/validating-json-query-string-as-query-param-using-joi
// https://hapijs.com/tutorials/validation


// Connect to vTiger
// Take the New Order from shopify and push it into the Sales Orders module

// We can't really authenticate this route because there's no way to include
// headers in the webhook from Shopify
// Also, Joi doesn't have a way of checking for an exact string, and .regex
// doesn't seem to work.

export default {
    path: '/v1/post-sales-order',
    method: ['PUT', 'GET'],
    handler: (request, reply) => {
        if (request.raw['req']['headers']['x-shopify-hmac-sha256'] !== Secrets.default.CUSTOM_SECRET) {
            console.log('bad key')
            return reply(Boom.unauthorized('Key did not match.'))
        }
        console.log(`Get request from ${request.route.path} with method ${request.route.method}`)
        console.log(`Shopify token: ${request.raw['req']['headers']['x-shopify-hmac-sha256']}`)
        reply(`Right token!`).code(200)
    }
}
