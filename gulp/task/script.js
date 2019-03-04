const { dest } = require('gulp')
const { configure } = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

const script = (cb) => {
  browserify({
    entries: ['src/script/index.js']
  })
    .transform(configure({
      presets: ['@babel/preset-env']
    }))
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(dest('build/script'))
  cb()
}

module.exports = script
