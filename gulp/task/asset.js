const { src, dest } = require('gulp')

const asset = (cb) => {
  src('src/assets/**/*')
    .pipe(dest('build/assets'))
  cb()
}

module.exports = asset
