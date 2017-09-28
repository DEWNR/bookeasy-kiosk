var gulp         = require('gulp')
var config       = require('../../config')
var revReplace   = require('gulp-rev-replace')
var replace      = require('gulp-replace')
var path         = require('path')
var inlinesource = require('gulp-inline-source')

// 5) Update asset references in HTML
gulp.task('update-html', function(){
  var manifest = gulp.src(path.join(config.root.dest, "/rev-manifest.json"))
  return gulp.src(path.join(config.root.dest, config.tasks.html.dest, '/**/*.html'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(replace('index.html', '/parks/Find_a_Park/Browse_by_region/Yorke_Peninsula/innes-national-park/kiosk/'))
    .pipe(replace('camping.html', '/parks/Find_a_Park/Browse_by_region/Yorke_Peninsula/innes-national-park/kiosk/camping'))
    .pipe(replace('park-entry.html', '/parks/Find_a_Park/Browse_by_region/Yorke_Peninsula/innes-national-park/kiosk/park-entry'))
    .pipe(replace('./camping-details.html', '/parks/Find_a_Park/Browse_by_region/Yorke_Peninsula/innes-national-park/kiosk/camping-details'))
    .pipe(inlinesource())
    .pipe(gulp.dest(path.join(config.root.dest, config.tasks.html.dest)))
})
