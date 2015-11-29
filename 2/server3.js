/*
 ??http???
 */
//??http??
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var htmlDir = __dirname + '\\';
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
            write(htmlDir + 'index.html');
            break;

        case '/user':
            write('user page');
            break;

        case '/login':
            var str = '';
            if(req.method.toUpperCase()=="POST"){
                req.on('data',function(data){
                   str += data;
                });
                req.on('end',function(){//??user????????
                    console.log(str + '\n');
                    var user = querystring.parse(str);
                    console.log(user.userName);
                    console.log(user.pwd);
                });
            }else{
                console.log('method=get \n');
                var user = querystring.parse(urlStr.query);
                console.log(user);
                console.log("\n");
                console.log(user.userName + "\n");
                console.log(user.pwd);
            }
            write('abc');
            break;

        default:
            write('fails');
            break;
    }

    function write(file){
        if(typeof file == 'string'){
            res.writeHead(200);
            res.end(file);
        }
        fs.readFile(file,function(err,data){
            if(err){
                res.writeHead(404);
                res.end('error');
            }else{
                res.writeHead(200);
                res.end(data);
            }
        })
    }

});




