const io = require('socket.io-client')

export default function (user_id, token, controls) {
  const socket = io.connect('http://localhost:3006?id=' + user_id.toString() + '&token=' + token.toString())

  socket.on('error', function (err) {
    console.log('received socket error:')
    console.log(err)
  })


  socket.on('message', controls.onMessageReceived)

  // socket.on('chats', function (chats){console.log(chats)})
  // socket.emit('message',"Test message")


  function getChatrooms(cb) {
    socket.emit('chatrooms', null, cb)
  }
  function getChatroomParticipants(chat_id,cb){
    socket.emit('getChatroomParticipants',chat_id,cb)
  }

  function sendMessage(msg = {}, cb) {
    socket.emit('message', msg, cb)
  }

  function searchResearchers(searchString = "", cb) {
    socket.emit('searchReseacher', searchString, cb)
  }

  function allResearchers(cb) {
    socket.emit('allResearcher', cb)
  }

  function createChatroom(chatDetails, cb) {
    socket.emit('createChatroom', chatDetails, cb)
  }

  return {
    getChatrooms,
    getChatroomParticipants,
    sendMessage,
    searchResearchers,
    allResearchers,
    createChatroom,
  }
}

