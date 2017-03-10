import ExtendableError from 'es6-error'

class Validation extends ExtendableError {
    constructor(message = 'Validation Error') {
        super(message)
    }
}

export default Validation
