import ExtendableError from 'es6-error'

class InvalidArguments extends ExtendableError {
    constructor(message = 'InvalidArguments Error') {
        super(message)
    }
}

export default InvalidArguments
