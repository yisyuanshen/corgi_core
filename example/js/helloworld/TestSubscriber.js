const protobuf = require('protobufjs');
const Subscriber = require('./../core/Subscriber.js');
const root = protobuf.loadSync(`${process.env.HOME}/corgi_ws/corgi_core/example/protos`+"/hello.proto");
const hello_proto = root.lookup('hello.hello');
const hello_sub = Subscriber("hello", 1000, console.log, hello_proto);