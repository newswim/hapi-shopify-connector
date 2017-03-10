import ExtendableError from 'es6-error'

class NotFoundError extends ExtendableError {
    constructor(message = 'Not Found Error') {
        super(message)
    }
}

export default NotFoundError
