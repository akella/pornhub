var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
// webserver
gulp.task('server', function() {
    browserSync({
        proxy: 'http://www.pornhub.com',
        files: [config.dest.html + '*.html', config.dest.css + '*.css', config.dest.js + '*.js'],
        middleware: require('serve-static')('./build'),
        rewriteRules: [
            {
                match: new RegExp('</head>'),
                fn: function() {
                    return '<script async="" src="/browser-sync/browser-sync-client.2.9.6.js"></script>' +
                        '<link rel="stylesheet" type="text/css" href="/css/responsive.css" media="all"><script src="/js/responsive.js" type="text/javascript"></script></head >'
                }
            }
        ],
        port: 8080,
        open: true
        
    });
});
