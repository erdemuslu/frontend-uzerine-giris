const { src, dest } = require('gulp')
const sass = require('gulp-sass')

const style = (cb) => {
  src('src/style/index.scss')
    .pipe(sass())
    .pipe(dest('build/style'))
  cb()
}

module.exports = style
