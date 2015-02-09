var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  watch = require('gulp-watch'),
  minifyCSS = require('gulp-minify-css'),
  templateCache = require('gulp-angular-templatecache'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  livereload = require('gulp-livereload'),
  karma = require('karma').server,
  gulpDebug = require('gulp-debug'),
  util = require('gulp-util'),
  jshint = require('gulp-jshint'),
  gulpIf = require('gulp-if'),
  stylish = require('jshint-stylish'),
  bowerFiles = require('main-bower-files'),
  ngAnnotate = require('gulp-ng-annotate'),
  es6to5 = require('gulp-6to5'),
  runSequence = require('run-sequence');

var appSrcFiles = [
  'client/app.module.js',
  'client/app.config.js',
  'client/app.controller.js',
  'client/**/*.js',
  'client/**/**/*.js',
  'build/*.js'
];

var printDebug = true;

function processBowerFiles(filterFn) {
  return bowerFiles({
    paths: bowerFilesPaths,
    filter: filterFn,
    checkExistence: true
  });
}

var bowerFilesPaths = {
  bowerDirectory: './bower',
  bowerrc: './.bowerrc',
  bowerJson: './bower.json'
};

function debugThis(title) {
  return gulpIf(printDebug, gulpDebug({
    title : title
  }));
}

// house keeping
gulp.task('clean', function () {
  return gulp.src('./build').pipe(
    debugThis('clean')
  ).pipe(clean());
});

// Vendor JavaScript and CSS processing

gulp.task('vendor-js', function () {
    return gulp.src(processBowerFiles(function filter(fileName) {
      return fileName.indexOf('.js') >= 0;
    })).pipe(debugThis('vendor-js'))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-css', function () {
  return gulp.src(processBowerFiles(function filter(fileName) {
    return fileName.indexOf('.css') >= 0;
  })).pipe(debugThis('vendor-css'))
    .pipe(concat('vendor.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('vendor-fonts', function () {
  return gulp.src(processBowerFiles(function filter(fileName) {

    var fontSuffix = [
      '.otf',
      '.eot',
      '.svg',
      '.ttf',
      '.woff',
      '.woff2'
    ];

    for(var i = 0; i < fontSuffix.length; i++){
      if (fileName.indexOf(fontSuffix[i])>= 0){
        return true;
      }
    }

    return false;
  })).pipe(debugThis('vendor-fonts'))
    .pipe(gulp.dest('./public/fonts'));
});

// Application JavaScript/CSS processing

gulp.task('build-templates', function (cb) {
  runSequence('templates', cb);
});

gulp.task('app', function () {
  gulp.src(appSrcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('client.js', {newline: ';'}))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('app-scss', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./public/styles'))
    .pipe(livereload());
});

gulp.task('templates', function () {
  return gulp.src([
    './client/**/*.html',
    './client/directives/**/*.html'
  ]).pipe(templateCache({
    module: 'app',
    filename: 'templates.js'
  })).pipe(gulp.dest('./build'));
});

gulp.task('build', function (cb) {
  runSequence('templates', 'app', cb);
});


gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', [
    'clean',
    'vendor-fonts',
    'vendor-css',
    'vendor-js',
    'app-scss',
    'build'],
  function () {
    livereload.listen();
    gulp.watch(['./scss/*.scss'], ['app-scss']);
    gulp.watch(['./client/**/*.html'], ['build-templates']);
    gulp.watch(appSrcFiles, ['build']);
  });

//gulp.task('debug', function () {
//  gulp.debug = true;
//  util.log(util.colors.green('RUNNING IN DEBUG MODE'));
//  gulp.start('default');
//});

