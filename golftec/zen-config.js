/*------------------------------------*\
    ::Common Configuration
    ----------------------------------*
    common configuration options
    typical for most projects
\*------------------------------------*/
var config = {
    site: {
        // client folder name
        client: 'golftech',
        // project folder name
        proj:   'golftec'
    },
    url: {
        // address of the home page
        root: 'http://localhost/sites/golftec/golftec'
    },
    sass: {
        // location to look for sass files - expects a relative path ending in "/"
        // uses globbing for sub directories and files
        src:    './sass/',
        // destination for compiled css file - expects a relative path ending in "/"
        dest:   './'
    },
    js: {
        // name of script to process (must not contain a "-" character)
        scripts: {
            // destination of files to process - can use globbing
            src: './js/scripts-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './js/scripts.min.js'
        },
        sliders: {
            // destination of files to process - can use globbing
            src: './js/sliders-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './js/sliders.min.js'
        },
        stats: {
            // destination of files to process - can use globbing
            src: './js/stats-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './js/stats.min.js'
        },
        map: {
            // destination of files to process - can use globbing
            src: './js/map-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './js/map.min.js'
        },
        video: {
            // destination of files to process - can use globbing
            src: './js/video-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './js/video.min.js'
        }
        // you can add additional script objects using the same format as the above object
        // each will be available for processing separately
        // (e.g. you can run gulp js-scripts for the above script)
    },
    svg: {
        // name of svg sprite to process (must not contain a "-" character)
        // general: {
        //     // destination of files to process - can use globbing
        //     src: './images/general-src/**/*.svg',
        //     // destination of output file - expects relative path ending in "/"
        //     dest: './images/general-sprite/'
        // }
    },
    watch: {
        // files to watch - can accept a string or an array of strings
        src: './**/*.{php,html}'
    }
};

/*------------------------------------*\
    ::Project Specific Configuration
    ----------------------------------*
    atypical configuration options
    applicable to this project only
\*------------------------------------*/
// egsample:
// config.someOptionName = {
//     someOptionProperty: 'Some Option Value'
// };

/*------------------------------------*\
    ::Object Export to for Gulp
\*------------------------------------*/
module.exports = config;