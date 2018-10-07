/*------------------------------------*\
    :: Lucid Build
    -----------------------------------*
    :: Version 0.0.1
\*------------------------------------*/

/*------------------------------------*\
    ::Plugins
\*------------------------------------*/
// initial
var gulp = require('gulp');
var stops = require('pipe-error-stop');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// lazy loaded
var compass;
var sourcemaps;
var prefix;
var uglify;
var svg;
var symlink;
var gulpif;
var shell;
var gulp = require('gulp');

/*------------------------------------*\
    ::Configuration
\*------------------------------------*/
var config = require('./gulp-config.js');

/*------------------------------------*\
    ::Task Definitions
\*------------------------------------*/
// CSS
gulp.task('css', function() {
    compass = require('gulp-compass');
    sourcemaps = require('gulp-sourcemaps');
    prefix = require('gulp-autoprefixer');

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
                browserSync.notify("SASS Compilation Error");
                browserSync.reload();
            }
        }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(prefix('last 2 version', 'ie 10', 'ie 9'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.sass.dest));
});

//js
for(var key in config.js) {
   gulp.task('js-'+key, function() {
        uglify = require('gulp-uglifyjs');

        var key = this.seq[0].split('-')[1];
        var destParts = config.js[key].dest.split('/');
        var destFile = destParts.pop();
        var destPath = destParts.join('/') + '/';

        gulp.src(config.js[key].src)
            .pipe(stops(uglify(destFile, {
                sourceRoot: config.url.root,
                outSourceMap: true
            }), {
                eachErrorCallback: function(){
                    browserSync.notify("JavaScript Compilation Error");
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
        svg = require('gulp-svg-sprite');
        symlink = require('gulp-symlink');
        gulpif = require('gulp-if');

        var key = this.seq[0].split('-')[1];
        var destParts = config.svg[key].dest.split('/');
        var destFile = destParts.pop();
        var destPath = destParts.join('/') + '/';
        if(destFile != ''){
            destPath = destPath + key + '-sprite/';
        }
        gulp.src(config.svg[key].src)
            .pipe(svg({
                mode: {
                    inline: true,
                    symbol: true
                },
                svg: {
                    xmlDeclaration: false
                }
            }))
            .pipe(gulp.dest(destPath))
            .pipe(gulpif(destFile != '', symlink(destPath + '../' + destFile, { force: true })));
    });
}
/*------------------------------------*\
    ::Watch
\*------------------------------------*/
gulp.task('watch', function() {

    // browsersync proxy
    browserSync({
        proxy: config.url.root,
        open: false,
        snippetOptions: {
            whitelist: ['/wp-admin/admin-ajax.php'],
      		blacklist: ['/wp-admin/**']
        }
    });

    // css watch
    gulp.watch(config.sass.src + '**/*.scss', ['css']);

    // js watches
    for(var key in config.js){
       gulp.watch(config.js[key].src, ['js-'+key]);
    }

    // general file changes
    gulp.watch(config.watch.src).on('change', reload);
});

/*------------------------------------*\
    ::Task Combinations
\*------------------------------------*/
gulp.task('default', ['watch']);