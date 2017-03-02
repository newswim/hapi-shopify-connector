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


// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     access_token: [Joi.string(), Joi.number()],
//     birthyear: Joi.number().integer().min(1900).max(2013),
//     email: Joi.string().email()
// }).with('username', 'birthyear').without('password', 'access_token');

// Connect to vTiger
// Take the New Order from shopify and push it into the Sales Orders module

export default {
    path: '/v1/post-sales-order',
    method: ['PUT', 'GET'],
    config: {
        // auth: 'simple', // This registers route with our authentication strategy
        validate: {
            query: {
                validationKey: Joi.string().required()
            },
        },
    },
    handler: (request, reply) => {
        if (request.query.validationKey !== Secrets.default.CUSTOM_SECRET) {
            console.log('bad key')
            return reply(Boom.unauthorized('Bad key'))
        }
        console.log(`Get request from ${request.route.path} with method ${request.route.method}`)
        reply(`You had some params: ${request.query.validationKey}`) /* .code(200) */
    }
}
