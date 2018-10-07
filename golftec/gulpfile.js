/*------------------------------------*\
    ::Variables
\*------------------------------------*/

/*------------------------------------*\
    ::Plugins
\*------------------------------------*/
var gulp        = require('gulp');
var stops       = require('pipe-error-stop')
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglifyjs');
var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');
var compass     = require('gulp-compass');
var prefix      = require('gulp-autoprefixer');
var svg         = require('gulp-svg-sprite');
var shell       = require('gulp-shell');
var reload      = browserSync.reload;

/*------------------------------------*\
    ::Configuration
\*------------------------------------*/
var config = require('./zen-config.js');

/*------------------------------------*\
    ::Task Definitions
\*------------------------------------*/

//css
gulp.task('css', function() {
    gulp.src(config.sass.src+'*.scss')
        .pipe(stops(compass({
            sourcemap: true,
            quiet: true,
            css: config.sass.dest,
            sass: config.sass.src,
            image: config.sass.src+'../images',
            style: 'compressed',
            require: ['sass-globbing']
        }), {
            eachErrorCallback: function(){
                console.log('css task failure');
                // browserSync.notify("SASS Compilation Error");
                // browserSync.reload();
            }
        }))
        .pipe(prefix('last 2 version', 'ie 10', 'ie 9'))
        .pipe(browserSync.stream({injectChanges:true}))
        .pipe(gulp.dest(config.sass.dest));
});

//kss (knyle style sheets)
gulp.task('kss', function() {
    return gulp.src('')
        .pipe(shell([
                './node_modules/.bin/kss-node',
                '--source '+config.sass.src,
                '--destination '+config.sass.dest+'styleguide/',
                '--css ../styleguide-settings.css',
                '--css ../style.css',
                '--js ../styleguide-settings/jquery.1.10.1.min.js',
                '--js ../styleguide-settings/styleguide.js',
                '--title "Styleguide"'
        ].join(' ')));
});

//js
for(var key in config.js) {
   gulp.task('js-'+key, function() {
        var key = this.seq[0].split('-')[1];
        var destParts = config.js[key].dest.split('/');
        var destFile = destParts.pop();
        var destPath = destParts.join('/') + '/';

        gulp.src(config.js[key].src)
            //.pipe(jshint())
            //.pipe(jshint.reporter('default'))
            .pipe(stops(concat(destFile), {
                eachErrorCallback: function(){
                    //browserSync.notify("JavaScript Compilation Error");
                    console.log('js task failure');
                }
            }))
            .pipe(gulp.dest(destPath))
            .pipe(browserSync.reload({stream:true}));
   });
}

//svg
for(var key in config.svg) {
    gulp.task('svg-'+key, function() {
        var key = this.seq[0].split('-')[1];
        gulp.src(config.svg[key].src)
            .pipe(svg({
                mode: {
                    inline: true,
                    symbol: true
                }
            }))
            .pipe(gulp.dest(config.svg[key].dest));
    });
}

/*------------------------------------*\
    ::Watch
\*------------------------------------*/
//generic watch
gulp.task('watch', function() {

    

    // browsersync proxy
    // browserSync({
    //     proxy: config.url.root,
    //     open: false,
    //     snippetOptions: {
    //         whitelist: ['/sites/'+config.site.client+'/'+config.site.proj+'/wp-admin/admin-ajax.php'], // whitelist checked first
    //         blacklist: ['/sites/'+config.site.client+'/'+config.site.proj+'/wp-admin/**']
    //     }
    // });

    //css watch
    gulp.watch(config.sass.src+'**/*.scss', ['css']);

    //kss watch
    gulp.watch(config.sass.dest+'/*.css', ['kss']);

    //js watches
    for(var key in config.js){
       gulp.watch(config.js[key].src, ['js-'+key]);
    }

    // general file changes
    gulp.watch(config.watch.src).on('change', browserSync.reload);
});

/*------------------------------------*\
    ::Task Combinations
\*------------------------------------*/
gulp.task('default', ['watch']);