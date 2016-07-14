var seneca = require('seneca')({transport: {host: '10.64.22.21'}})
      .use('client')
      .use('mesh',{
            auto : true,
            bases: ['10.64.22.21:10080'],
            host: '10.64.22.21'
          })
      .client({ type:'tcp', pin:'role:agent' })

var app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(10081)
