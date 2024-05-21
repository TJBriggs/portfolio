/*------------------------------------*\
    ::Common Configuration
    ----------------------------------*
    ::version 2.0.7

    common configuration options
    typical for most projects
\*------------------------------------*/
var config = {
    url: {
        // address of the home page
        root: 'http://pka.dev'
    },
    sass: {
        // location to look for sass files - expects a relative path ending in "/"
        // uses globbing for sub directories and files
        src:    './assets/styles/',
        // destination for compiled css file - expects a relative path ending in "/"
        dest:   './'
    },
    js: {
        // name of script to process (must not contain a "-" character)
        scripts: {
            // destination of files to process - can use globbing
            src: './assets/scripts/scripts-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './assets/scripts/scripts.min.js'
        },
        map: {
            // destination of files to process - can use globbing
            src: './assets/scripts/map-src/**/*.js',
            // destination of output file - expects path and filename
            dest: './assets/scripts/map.min.js'
        }
        // you can add additional script objects using the same format as the above object
        // each will be available for processing separately
        // (e.g. you can run gulp js-scripts for the above script)
    },
    svg: {
        // name of svg sprite to process (must not contain a "-" character)
        general: {
            // destination of files to process - can use globbing
            src: './assets/images/general-src/**/*.svg',
            // destination of output file - expects path and (optionally) a filename
            dest: './assets/images/general.sprite.svg'
        }
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
