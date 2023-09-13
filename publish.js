const { execSync } = require('child_process')

const date = new Date()

const year = date.getFullYear()

const month = date.getMonth() + 1

const day = date.getDate()

execSync(`git add .`)

execSync(`git commit -m ${year}-${month}-${day}`)

execSync(`git push origin master`)