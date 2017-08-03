var http = require('http');//引入http模块

//开启服务
var server = http.createServer(function(req,res){

    console.log('client link');//node 后台显示

    //200连接成功、头信息
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    });

    res.write('Hello World');//浏览器显示
    res.end();

}).listen(8888);

console.log('node 服务器成功开启')