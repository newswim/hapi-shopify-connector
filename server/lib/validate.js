import Future            from 'fibers/future'
import Joi               from 'joi'
import {ValidationError} from './errors'

/**
 * Wraps a joi validate call in a fiber
 *
 * @param {object} value              - the value to be validated
 * @param {object} schema             - the Joi schema to validate with
 * @param {class}  options.errorClass - the Error descendant that will be thrown in the event of a validation problem
 */
const validate = (value, schema, {errorClass: ErrorClass = ValidationError, ...otherOptions} = {}) => {
    const future = new Future()
    Joi.validate(value, schema, otherOptions, (err, data) => {
        if (err) {
            return future.throw(new ErrorClass(err.message))
        }
        future.return(data)
    })
    return future.wait()
}

export default validate
