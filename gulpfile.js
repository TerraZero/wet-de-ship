const gulp = require('gulp');

const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const glob = require('glob');

const sass = require('gulp-sass');
const pug = require('gulp-pug');

const files = {
  pug: {
    src: ['pug/**/*.pug', '!pug/**/_*.pug'],
    dest: 'web',
    watch: 'pug/**/*.pug',
  },
  sass: {
    src: ['sass/**/*.sass', '!sass/**/_*.sass'],
    dest: 'web/css',
    watch: 'sass/**/*.sass',
  },
  js: {
    src: ['js/**/*.js', 'node_modules/vue/dist/vue.min.js'],
    dest: 'web/js',
    watch: 'js/**/*.js',
    locals: {
      libs: [
        '/js/vue.min.js',
      ],
      scripts: [
        '/js/mount.js',
      ],
    },
  },
};

gulp.task('pug', function () {
  const locals = {
    classes: glob.sync('js/**/*.js', {
      ignore: 'js/mount.js',
    }),
  };

  for (const name in files) {
    if (files[name].locals === undefined) continue;
    for (const valuename in files[name].locals) {
      locals[valuename] = files[name].locals[valuename];
    }
  }

  return gulp.src(files.pug.src)
    .pipe(pug({
      locals: locals,
    }))
    .pipe(gulp.dest(files.pug.dest));
});

gulp.task('sass', function () {
  return gulp.src(files.sass.src)
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(files.sass.dest));
});

gulp.task('js', function () {
  return gulp.src(files.js.src)
    .pipe(gulp.dest(files.js.dest));
});

gulp.task('watch', ['default'], function () {
  for (const name in files) {
    gulp.watch(files[name].watch, [name]);
  }
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './web',
    },
  });
});

gulp.task('watch:serve', ['serve', 'watch']);

gulp.task('default', ['pug', 'sass', 'js']);
