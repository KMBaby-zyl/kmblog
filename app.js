var ejs = require('ejs'),
    fs = require('fs'),
    async = require('async'),
    main_str = fs.readFileSync(__dirname + '/view/main.ejs', 'utf8'),
    articles_str = fs.readFileSync(__dirname + '/view/articles.ejs', 'utf8');
    path_index = '../KMBaby-zyl.github.io/index.html';
    path_articles = '../KMBaby-zyl.github.io/articles/';
var marked = require('marked');
var _ = require('underscore');


async.series({
    // read content
    articles: function(callback){
        // do some stuff ...
        fs.readdir(__dirname + '/content',function(err,files){
            callback(null, files);
        });
    }
},
function(err, results){

    // render
    var articles = results.articles;
    for(var i in articles){
        articles[i] = articles[i].slice(0,-3);
    }


    console.log(articles);
    var opt = {
        articles: articles,
        filename: __dirname + '/view/main.ejs'
    };

    var ret = ejs.render(main_str,opt);


    fs.writeFile(path_index, ret, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });

    for(var i in articles){
        var path = '/content/'+articles[i]+'.md';
        var content = _md(path);
        var opt = {
            content: content,
            filename: __dirname + '/view/articles.ejs'
        };

        var ret = ejs.render(articles_str,opt);
        console.log(path_articles+articles[i]+'.html');
        fs.writeFile(path_articles+articles[i]+'.html', ret, function (err) {
          if (err) throw err;
          console.log('It\'s saved!');
        });
    }
    console.log(3);
});


function _md(path){
    console.log(path);
    var content_path = __dirname + path;
    var tok = marked.lexer(fs.readFileSync(content_path, 'utf8'));
    return marked.parser(tok)
}


