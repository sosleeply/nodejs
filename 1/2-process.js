console.log(__filename);

//require('??');

//require('2-process.js');  //??????./??????????2.js????????
var m1 = require('./1.js');
console.log(m1.a);

console.log(global.process===process);
console.log(process.memoryUsage);
//process.exit();

/*
global
    --process??
        version ??????
        versions    ??node??node???????
        pid ??pid
        title   ??title
        arch    ??CPU?????   x64
        platform    ??????
        cwd ?????????
        chdir(directory)    ???????????
        memoryUsage node??????????byte
        exit    ??
        kill    ???????

        stdout  ??
        stdin   ??

 */
process.stdout.write('stdout');
//?????????????????????????????
process.stdin.resume();
process.stdin.on('data',function(data){
    console.log('show: ' + data);
});