require('seneca')({transport: {host: '10.64.22.21'}})

.use(require('./agentRetrieve.js'))


.use('mesh', { listen: [{pin: {role:'agent'}, host: '10.64.22.21'}], bases: ['10.64.22.21:10080'], host: '10.64.22.21'})
