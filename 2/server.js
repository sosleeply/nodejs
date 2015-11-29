/*
??http???
 */
//??http??
var http = require('http');
//??
var server = http.createServer();

//server.listen(8888,'localhost')
server.listen(8888);
//??????
server.on('error',function(err){
    console.log(err);
});
//??????
server.on('listening',function(){//??????createServer?
    console.log('listening...');
});
server.on('request',function(req, res){
    console.log('a request...');
    console.log(req.headers);

    res.writeHead(200,'Ok',{
        'content-type':'text/html,charset="utf-8"'
    });
    res.write('success');
    res.end();
});




