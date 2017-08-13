var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();

var packageJson = require('./package.json');
var dependencies = Object.keys(packageJson && packageJson.dependencies || {});

gulp.task('dev-js', function() {
  return browserify('./app/index.js', { debug: true })
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .on('error', function(err) {
      console.log(err);
      browserSync.notify(err.message, 3000);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({ loadMaps: true }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('dev-templates', function() {
  return gulp.src(['app/**/*.css', 'app/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile-js', function() {
  var envs = plugins.env.set({
    'NODE_ENV': 'production'
  });

  return browserify('./app/index.js', { debug: true })
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .on('error', function(err) {
      console.log('Error on bundle', err);
      browserSync.notify(err.message, 3000);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({ loadMaps: true }))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(envs.reset)
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile-templates', function() {
  return gulp.src(['app/**/*.css', 'app/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return gulp.src('./dist/**/*')
    .pipe(plugins.rimraf());
});

gulp.task('refresh-js', ['dev-js'], function() {
  browserSync.reload
});

gulp.task('refresh-templates', ['dev-templates'], function() {
  browserSync.reload
});

gulp.task('watch', ['dev-js', 'dev-templates'], function() {
  var watcher1 = gulp.watch('./app/**/*.js', ['refresh-js']);
  var watcher2 = gulp.watch(['./app/**/*.html', './app/**/*.css'], ['refresh-templates']);

  watcher1.on('change', function(event) {
    console.log('JS File ' + event.path + ' was ' + event.type + ', running tasks...');
  });

  watcher2.on('change', function(event) {
    console.log('Template ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('serve', ['watch'], function() {
  return browserSync.init({
    server: { baseDir: './dist' }
  });
});

gulp.task('build', function() {
  runSequence('clean', 'compile-js', 'compile-templates');
});

gulp.task('default', ['serve']);