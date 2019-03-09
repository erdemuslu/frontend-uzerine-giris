const { src, dest } = require('gulp')
const pug = require('gulp-pug')

const view = (cb) => {
  src('src/view/*.pug')
    .pipe(pug())
    .pipe(dest('build'))
  cb()
}

module.exports = view
