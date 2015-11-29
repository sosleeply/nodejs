var projectData = {
    'name' : 'ersanyu',
    'fileData' : [
        {
            'name' : 'js',
            'type' : 'dir'
        },
        {
            'name' : 'css',
            'type' : 'dir'
        },
        {
            'name' : 'images',
            'type' : 'dir'
        },
        {
            'name' : 'index.html',
            'type' : 'file',
            'content' : '<html>\n\t<head>\n\t<title></title></head>\n\t<body></body></html>'
        }
    ]
};

var fs = require('fs');
if(projectData.name){
    fs.mkdirSync(projectData.name);

    var fileData = projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f){
            f.path = projectData.name + '/' + f.name;
            f.content = f.content || '';
            switch (f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path, f.content);
                    break;
                default :
                    break;
            }
        })
    }
}