let express = require('express');
let app = express();
let WebSocket = require('ws')
let wss = new WebSocket.Server({port:3000})

wss.on('connection',function(ws){
    ws.on('message',function(e){
        console.log(e)
        ws.send('你也好呀')
    })
})
// app.use(express.static(__dirname)); //以当前目录做静态资源

// app.listen(4000)