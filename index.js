const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

async function main() {
  try {
    const url = core.getInput('slack-url')
    const payload = github.context.payload
    const message = `A new *issue* was created.\nTitle: ${payload.issue.title}\nUrl: ${payload.issue.url}`

    const res = await axios.post(url, {
      text: message
    })
    console.log(res)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
