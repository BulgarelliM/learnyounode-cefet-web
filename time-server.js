// Your server should listen to TCP connections on the port provided by the first argument to your program.
// Fonte: https://nodejs.org/api/net.html#netcreateserveroptions-connectionlistener
const net = require("net");
let porta = process.argv[2];

function getInfo(today){
    let year = today.getFullYear()
    let month = (parseInt(today.getMonth())+1)<10 ? '0'+(parseInt(today.getMonth())+1): parseInt(today.getMonth())+1; // starts at 0
    let date = parseInt(today.getDate())<10 ? '0'+(today.getDate()) : (today.getDate());
    let hour = parseInt(today.getHours())<10 ? '0'+today.getHours() : today.getHours();
    let min = parseInt(today.getMinutes())<10 ? '0'+today.getMinutes() : today.getMinutes();
    let data = year+'-'+String(month)+'-'+date+' '+hour+':'+min+'\n';
    return data;
}

const server = net.createServer(function (socket) {
    let today = new Date();
    let data = getInfo(today);
    socket.write(data);
    socket.end();
});

server.listen(porta);