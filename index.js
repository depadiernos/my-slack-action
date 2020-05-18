const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

  try {
    const url = core.getInput('slack-url')
    const payload = github.context.payload
    await axios.post(url, {
      text: {
        type: 'mrkdown',
        text: `A new issue was created.\n(${payload.title})[${payload.url}]`,
      },
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}
