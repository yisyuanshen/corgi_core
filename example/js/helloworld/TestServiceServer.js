const ServiceServer = require('./../core/ServiceServer.js');
const protobuf = require('protobufjs');
const root = protobuf.loadSync(`${process.env.HOME}/corgi_ws/corgi_core/example/protos`+"/hello.proto");
function cb_srv(request) {
    reply = {
        index: request.index
    };
    return reply;
}
const hello_srv = ServiceServer("hello", cb_srv, root, 'hello.hellorequest', 'hello.helloreply');