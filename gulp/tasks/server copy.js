var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
// webserver
gulp.task('server', function() {
    browserSync({
        proxy: 'http://www.kyivstar.ua',
        files: [config.dest.html + '*.html', config.dest.css + '*.css', config.dest.js + '*.js'],
        middleware: require('serve-static')('./build'),
        rewriteRules: [
            {
                match: new RegExp('<link rel="start" href="/">'),
                fn: function() { 
                    return '<script async="" src="/browser-sync/browser-sync-client.2.9.6.js"></script><link rel="stylesheet" type="text/css" href="/css/responsive.css" media="all"><script src="/js/responsive.js" type="text/javascript">'
                }
            },
            // removing already deployed assets
            {
                match: new RegExp('/f/1/mm/tariffs/contract/global/responsive.css'),
                fn: function() { 
                    return ''
                }
            },
            {
                match: new RegExp('/f/1/mm/tariffs/contract/global/responsive.js'),
                fn: function() { 
                    return ''
                }
            }
        ],
        port: 8080
        // notify: false,
        // ghostMode: false,
        // online: false,
        // open: true,
        
    });
});
