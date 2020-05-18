const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

async function main() {
  try {
    const url = core.getInput('slack-url')
    const payload = github.context.payload
    const message = `A new issue was created.\n(${payload.issue.title})[${payload.issues.url}]`
    const res = await axios.post(url, {
      text: {
        type: 'mrkdown',
        text: message 
      }
    })
    console.log(res)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
