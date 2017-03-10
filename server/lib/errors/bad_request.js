import ExtendableError from 'es6-error'

class BadRequest extends ExtendableError {
    constructor(message = 'BadRequest Error') {
        super(message)
    }
}

export default BadRequest
