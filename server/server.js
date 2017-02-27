import Hapi from 'hapi'

const server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 8080,
})

server.route({
    method: 'GET',
    path: '/hi',
    handler: (request, reply) => {
        reply('yo')
    }
})

server.start(() => console.log(`Server started on port ${server.info.uri}`))
