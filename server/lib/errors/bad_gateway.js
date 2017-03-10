import ExtendableError from 'es6-error'

class BadGatewayError extends ExtendableError {
    constructor({message = 'Bad Gateway'}) {
        super(message)
    }
}

export default BadGatewayError
