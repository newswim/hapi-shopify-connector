import {BadGatewayError} from './errors'
import {BadRequestError} from './errors'
import Boom              from 'boom'
import Future            from 'fibers/future'
import {NotFoundError}   from './errors'

/**
 * Wraps a fiber-based function so that it can be
 * used as a hapi route handler
 */
const wrapHandler = (fn) => {
    return (request, reply) => {
        return Future.task(() => {
            try {
                reply({
                    statusCode: 200,
                    data      : fn(request)
                })
            } catch (e) {
                console.error(e.stack)

                if (e instanceof BadRequestError) {
                    return reply(Boom.badRequest(e.message))
                }

                if (e instanceof BadGatewayError) {
                    return reply(Boom.badGateway(e.message))
                }

                if (e instanceof NotFoundError) {
                    return reply(Boom.notFound(e.message))
                }

                reply(Boom.badImplementation(e.message))
            }
        }).promise()
    }
}

export default wrapHandler
