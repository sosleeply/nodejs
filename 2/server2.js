/*
 ??http???
 */
//??http??
var http = require('http');
var url = require('url');
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
    var urlStr = url.parse(req.url);
    //console.log(urlStr);

    switch(urlStr.pathname){
        case '/':
            write('home page');
            break;

        case '/user':
            write('user page');
            break;
    }

    function write(data){
        res.writeHead(200);
        res.write(data);
        res.end();
    }

});




