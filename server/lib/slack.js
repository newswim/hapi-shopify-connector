import {HTTP} from 'meteor/http'

// TODO: Get a new webhook url -- also create a new Slack channel to post orders.

// const SLACK_URL = 'https://hooks.slack.com/services/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'

const notify = (message) => {
    if (process.env.NODE_ENV !== 'development') {
        HTTP.post(SLACK_URL, {data: {
            text: message
        }},() => {})
    }
}

export default notify
