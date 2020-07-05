const gulp =require('gulp');
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const sass=require('gulp-sass');
const concat = require('gulp-concat');
/*
Here we will add our plugins
gulp.task-to define tasks
gulp.src -points to files to use
gulp.dest --points folder to output
gulp.watch-watches files if anything changes in code

*/
// gulp.task('default', ['message','copyHtml','minify']);
//Log Mesage
gulp.task('message',function(){
    return console.log('Gulp is running......');
});
// gulp.task('default',function(){
//     return console.log('Gulp is running......');
// });
//Copy Files
gulp.task('copyHtml',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});
//Optimize Images
gulp.task('imageMin',function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//Minify Js

gulp.task('minify',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
//Compile sass
// gulp.task('sass',function(){
//     gulp.src('src/sass/*.scss')
//     .pipe(sass().on('error',sass.logError))
//     .pipe(gulp.dest('dist/css'))
// });

gulp.task('scripts',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
});
gulp.task('watch',function(){
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/images/*',['imageMin']);
    
});
//All Tasks to Ruun
