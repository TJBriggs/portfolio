# Zenman Style Guide
## Description
The KSS Zenman Style Guide setup for Zenman automates creation of style guides when building websites.

## Setup
### One-Time Initial Setup
Before using the Zenman Style Guide scripts you'll need to [install node](http://nodejs.org/) and [install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started) on your system.

### Adding KSS to Gulp
After this, you'll need to add KSS to gulp to automate style guide creation.

First, add the node module by running ``npm install --save-dev kss`` in your project (alternatively, just add ``"kss": "^2.1.0"`` to your ``devDependencies`` in the ``package.json`` file).

Next, add the ``kss`` task to your ``gulpfile.js`` file like so:

```
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
                '--title "Style Guide"'
        ].join(' ')));
});
```

If you'd like to set up file watching for KSS, you can also add ``gulp.watch(config.sass.dest+'/*.css', ['kss']);`` to the existing ``watch`` task at the bottom of the ``gulpfile.js``.

### Adding Default Content
To get started with common elements already set up, you can replace your base ``.scss`` files with those in the ``sass/kss-demo/base`` directory of this project.

### Visiting the Style Guide
You can visit your style guide by visiting the ``styleguide`` directory in your browser. For a WordPress site that would look something like http://localhost:8888/sites/client-name/project-name/wp-content/themes/project-name/styleguide

### Learning More
You can learn more about how to format KSS comments and do advanced configuration here: https://github.com/kss-node/kss/blob/spec/SPEC.md

## Usage
To build the style guide once, you can simply run ``gulp kss`` on the command line within your project. If you added the KSS watch task, you can also just run ``gulp`` and gulp will continually look for changes and update the style guide.

## Changelog

### 1.0.0 - 15.08.06 - @tcmulder

* Created initial style guide and functionality.
