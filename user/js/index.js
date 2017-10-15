//简单的输入用户名
var userName = prompt("请输入用户名：")||"匿名用户："+100000+Math.floor(Math.random()*100000);
//客户端建立连接 
var socket = io();

$('form').submit(function(){
    var msg = {name:userName,msg:$('#m').val()}
    //触发事件
    socket.emit('chat message',JSON.stringify(msg));
    $('#messages').append($('<li>').text("我说："+$('#m').val()));
    //情况文本中的内容
    $('#m').val('');
    //阻止事件默认行为
    return false;
});

//接收服务端发来的消息
socket.on('guangbo', function(msg){
    //对象字符串
    var msgObj = JSON.parse(msg);
    $('#messages').append($('<li>').text(msgObj.name+"说："+msgObj.msg));
});