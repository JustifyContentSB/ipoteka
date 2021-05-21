let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify-es').default;

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('script', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('scss', function() {
    return gulp.src('app/scss/index/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css/index'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            index: 'index.html'
        }
    });
});

// INDEX
gulp.task('indexJs', function() {
    return gulp.src(['app/js/libs/jquery/jquery-3.6.0.min.js',
            'app/js/libs/jquery-range/jquery-ui.min.js',
            'app/js/libs/jquery-range/jquery.ui.touch-punch.min.js',
            'app/js/libs/slick/slick.min.js',
            'app/js/_main/slider.js',
            'app/js/_main/nav.js',
            'app/js/_main/faq.js',
            'app/js/_main/range.js',
            'app/js/_main/popup.js'
        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/index'))
        .pipe(browserSync.reload({ stream: true }))
});

//COMMON
gulp.task('commonJs', function() {
    return gulp.src(['app/js/libs/jquery/jquery-3.6.0.min.js',
            'app/js/_main/nav.js',
            'app/js/_main/popup.js'
        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/common'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
        // gulp.watch('app/js/**/*.js', gulp.parallel('indexJs'))
    gulp.watch('app/**/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('scss', 'indexJs', 'commonJs', 'browserSync', 'watch'));