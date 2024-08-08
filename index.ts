import { ReadmeBox } from 'readme-box'

async function main() {
  const response = await fetch('https://sinchang-checkin.web.val.run')
  const checkIn: {
    cc: string
    location: string
    venue: string
    lat: string
    lng: string
  } = await response.json()

  const content = `[${checkIn.venue}](https://www.google.com/maps/place/${checkIn.lat}+${checkIn.lng})<br><span style="font-size:0.5em;">${checkIn.location}</span>`

  await ReadmeBox.updateSection(content, {
    owner: 'sinchang',
    repo: 'sinchang',
    token: process.env.GITHUB_TOKEN as string,
    // branch is assumed to be 'master' by default, you can also specify `branch: 'main'`
    branch: 'master',
    section: 'checkIn-section',
    // set to `true` to allow empty commits when there are no changes
    emptyCommits: false,
  })
}

main()
