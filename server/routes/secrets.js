export default {
    path: '/secrets',
    method: 'GET',
    handler: (request, reply) => {
        reply(Secrets)
    }
}
