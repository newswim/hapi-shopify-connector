import * as Secrets from '../secrets'

export default {
    path: '/v1/secrets',
    method: 'GET',
    handler: (request, reply) => {
        reply(Secrets.default)
    }
}
