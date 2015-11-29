var fs = require('fs');
var fileDir = './ersanyu/source';

fs.watch(fileDir,function(ev,file){
    //console.log(ev + '/' + file); //?????file?????
    //??????????????????????????????????????
    fs.readdir(fileDir,function(err,dataList){
        var arr = [];
        dataList.forEach(function(f){
            if(f){
                var info = fs.statSync(fileDir + '/' + f);
                //console.log(f);
                arr.push(fileDir + '/' + f);
            }

        });
        var content = '';
        arr.forEach(function(f){
            var c = fs.readFileSync(f);
            content += c.toString() + '\n';
        });
        console.log(content);

        fs.writeFile('./ersanyu/index.html',content);
    });
});