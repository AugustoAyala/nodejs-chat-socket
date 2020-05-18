module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.on('server mensaje', function (data) {
            io.sockets.emit('view mensaje', {
                msg: data,
            });
        });
    });
};
