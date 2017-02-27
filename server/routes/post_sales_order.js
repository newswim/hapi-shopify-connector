import Joi from 'joi'

// Accept a webhook from Shopify (check the isAuthentic method)

// Connect to vTiger
// Take the New Order from shopify and push it into the Sales Orders module

export default {
    path: '/v1/post-sales-order',
    method: ['GET', 'PUT', 'POST'],
    config: {
        auth: 'token',
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
}
