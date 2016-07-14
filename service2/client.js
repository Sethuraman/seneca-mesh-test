module.exports = function api(options) {

  var valid_ops = { sum:'sum', product:'product' }

  this.add('role:api,path:retrieve', function (msg, respond) {
    this.act({role:'agent', cmd: 'retrieve', agentId: msg.agentId}, respond)
  })


  this.add('init:api', function (msg, respond) {
    this.act('role:web',{use:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        retrieve: { GET:true, suffix:'/:agentId' }
      }
    }}, respond)
  })
}