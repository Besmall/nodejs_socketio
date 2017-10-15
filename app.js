//引入核心模块
const http = require("http");
//自己的模块
const express = require("./express");


//创建一个服务
const server = http.createServer(express);
//引入socket.io
var io = require('socket.io')(server);
//服务端建立socket请求连接
io.on('connection', function(socket){
    console.log('a user connected');
    //断开连接
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    //接收客户端的信息
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        
        //将服务端的消息广播到客户端
        socket.broadcast.emit("guangbo",msg);
    });
    
});

//监听服务端口
server.listen(9999,()=>{
    console.log("服务端已经启动,请访问 http://localhost:9999");
});