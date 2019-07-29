$(function(){
    
    const socket = io();

    const Form = $('#form-mensaje');
    const Bodychat = $('#body-chat');
    const Mensaje = $('#input-mensaje');
    
    Form.submit( e => {
        e.preventDefault();
        socket.emit('server mensaje', Mensaje.val());
        Mensaje.val("");
    });

    socket.on('view mensaje', function (data) {
        Bodychat.append(data.msg + '<br/>');
    });

    
})