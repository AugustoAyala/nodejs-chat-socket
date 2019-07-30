$(function(){
    
    const socket = io();

    const form = $('#form-mensaje');
    const bodyChat = $('#body-chat');
    const mensaje = $('#input-mensaje');
    
    form.submit( e => {
        e.preventDefault();
        socket.emit('server mensaje', mensaje.val());
        mensaje.val("");
    });

    socket.on('view mensaje', function (data) {
        bodyChat.append(data.msg + '<br/>');
    });

    
})
