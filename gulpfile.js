// gulpfile.js

var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    jshintify = require('jshintify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');
gulp.task('build', function() {
    return browserify({
            entries: ['./app.jsx'], // starting module for browserify
            extensions: ['.jsx', '.js'], // .jsx is for React.js templates
            debug: (process.env.NODE_ENV === 'production') // used by React.js
        })
        .transform(reactify) // react.js browserify transform
        .transform(jshintify) // jshint browserify transform
        .bundle() // bundle modules
        .pipe(source('bundle.min.js')) // filename to save as
        .pipe(buffer()) // stream => buffer
        .pipe(uglify()) // minify js
        .pipe(gulp.dest('./public/')); // save to output directory
});