
const { log } = require('console')
const os = require('os')

const users = os.userInfo()
//console.log(users)
console.log(`the system uptime ${os.uptime()} in seconds`)

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()

}

console.log(currentOs)