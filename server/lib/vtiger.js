import _            from 'lodash'
import invariant    from 'invariant'
import validate     from './validate'
import Future       from 'fibers/future'
import NodeVTiger   from 'node-vtiger'
import {
    VT_URL,
    VT_USER,
    VT_ACCESSKEY,
    LOGGING_LEVEL } from '../secrets'


export default class VTClient {
    constructor({
        url = VT_URL,
        user = VT_USER,
        accessKey = VT_ACCESSKEY,
        logLevel = LOGGING_LEVEL,
    } = {}) {
        invariant(_.isString(url) && url, 'url is required')
        invariant(_.isString(user) && user, 'user is required')
        invariant(_.isString(accessKey) && accessKey, 'accessKey is required')
        invariant(_.isString(logLevel) && logLevel, 'logLevel is required')

        this._api = new NodeVTiger(url, user, accessKey, logLevel)
    }

    _login() {
        let future = new Future()
        this._api.doLogin(future.resolver())
        return future.wait()
    }

    _query(...args) {
        let future = new Future()
        this._api.doQuery(...args, future.resolver())
        return future.wait()
    }

    _create(...args) {
        let future = new Future()
        this._api.doCreate(...args, future.resolver())
        return future.wait()
    }

}
