const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

(async () => {
  try {
    const url = core.getInput('slack-url')
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    await axios.post(url, {
      text: {
        type: 'mrkdown',
        text: `A new issue was created.\n(${payload.title})[${payload.url}]`,
      },
    })
  } catch (error) {
    core.setFailed(error.message)
  }
})()
