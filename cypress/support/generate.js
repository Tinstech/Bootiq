import {build, fake} from 'test-data-bot'

const userBuilder = build('User').fields({
    email: fake(f => 'tester' + (f.date.recent().getTime() / 1000).toFixed(0) + '@bootiq.io'),
    password: fake(f => f.internet.password())
})

export {userBuilder}