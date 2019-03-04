const { task, watch } = require('gulp')

// load tasks
const style = require('./gulp/task/style')
const script = require('./gulp/task/script')

// init tasks
exports.style = style
exports.script = script

const watchFiles = () => {
  watch('src/style/**/*', style)
  watch('src/script/**/*', script)
}

task('watch', watchFiles)
task('style', style)
task('script', script)
