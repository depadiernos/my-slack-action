const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')
try {
  const url = core.getInput('slack-url')
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const notify = async () => {
    await axios.post(url, {
      text: {
        type: 'mrkdown',
        text: `A new issue was created.\n(${payload.title})[${payload.url}]`
      },
    })
  }
  notify()
} catch (error) {
  core.setFailed(error.message)
}
