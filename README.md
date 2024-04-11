# corgi_core

1. (Already done) Copy the any.pb.h file as Any.pb.h by the following command

>>```
>>sudo cp ~/corgi_ws/build/include/google/protobuf/any.pb.h ~/corgi_ws/build/include/google/protobuf/Any.pb.h
>>```

2. (Already done) Modify ```root``` directory in all the js files at *corgi_core/example/js/helloworld*

3. Build with the following command
>>```
>>cmake .. -DCMAKE_PREFIX_PATH=$HOME/corgi_ws/build -DCMAKE_INSTALL_PREFIX=$HOME/corgi_ws/build
>>```