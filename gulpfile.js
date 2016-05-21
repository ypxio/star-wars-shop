var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var errorify = require('errorify')

// JSX Compile
gulp.task('browserify', function(){
    var watcher = watchify(browserify({
        entries: './src/Index.jsx',
        transform: [babelify],
        debug: true,
        extensions: ['.jsx'],
        cache: {},
        fullPaths: true,
        packageCache: {}
    }).plugin(errorify));

    return watcher.on('update', function(){
        watcher.bundle()
            .pipe(source('script.js'))
            .pipe(gulp.dest('src'))
            .pipe(connect.reload())
            console.log("compiled")
    }).bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest('src'));
});

// Livereload
gulp.task('connect', function(){
    connect.server({
        root: 'src',
        livereload: true
    })
})

// Less Watch
gulp.task('watchLess', function(){
    gulp.watch('**/*.less', ['lessCompile'])
});

// Less compiler
gulp.task('lessCompile', function(){
    return gulp.src('./src/assets/stylesheets/style.less')
        .pipe(less())
        .pipe(gulp.dest('./src/assets/stylesheets'))
        .pipe(connect.reload());
});

// Build
gulp.task('build', function(){
    browserify({
        entries: ['./src/Main.jsx'],
        transform: [reactify, babelify],
        debug: false,
        extensions: ['.jsx'],
        cache: {},
        packageCache: {},
        fullPaths: true
    })
    .bundle()
        .pipe(source('build.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('src'))
});

gulp.task('default', ['browserify', 'watchLess', 'connect']);
