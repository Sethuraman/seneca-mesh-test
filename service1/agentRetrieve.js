module.exports = function agentRetrieve(options) {

  this.add( {role:'agent', cmd: 'retrieve'}, function (msg, done) {
    console.log('received message to retrieve agent. msg = ', JSON.stringify(msg));
    done( null, {name:'Tintin'})
  })
  

}