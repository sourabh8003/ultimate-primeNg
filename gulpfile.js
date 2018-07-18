'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten');

gulp.task('build-css', function() {
	gulp.src([
        'src/app/components/common/common.css',
		    'src/app/components/**/*.css'
    ])
        .pipe(concat('primeng.css'))
        .pipe(gulp.dest('build/resources'));
});

gulp.task('build-css-prod', function() {
    gulp.src([
        'src/app/components/common/common.css',
        'src/app/components/**/*.css'
    ])
    .pipe(concat('primeng.css'))
    .pipe(gulp.dest('build/resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primeng.min.css'))
    .pipe(gulp.dest('build/resources'));
});

gulp.task('copy-component-css', function () {
    gulp.src([
        'src/app/components/**/*.css'
    ])
    .pipe(gulp.dest('build/resources/components'));
});

gulp.task('images', function() {
    return gulp.src(['src/app/components/**/images/*.png', 'src/app/components/**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest('build/resources/images'));
});

gulp.task('themes', function() {
    return gulp.src(['src/assets/components/themes/**/*'])
        .pipe(gulp.dest('build/resources/themes'));
});

gulp.task('build-exports', function() {
    return gulp.src(['exports/*.js','exports/*.d.ts'])
        .pipe(gulp.dest('build/'));
});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
	del(['build/resources']);
});

//Building project with run sequence
gulp.task('build-assets', ['clean','copy-component-css', 'build-css-prod', 'images', 'themes']);

