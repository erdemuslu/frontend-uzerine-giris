const { task, watch, parallel } = require('gulp')

// load tasks
const style = require('./gulp/task/style')
const script = require('./gulp/task/script')
const view = require('./gulp/task/view')
const asset = require('./gulp/task/asset')

// init tasks
exports.style = style
exports.script = script
exports.view = view
exports.asset = asset

const watchFiles = () => {
  watch('src/style/**/*', style)
  watch('src/script/**/*', script)
  watch('src/view/**/*', view)
  watch('src/asset/**/*', asset)
}

task('watch', watchFiles)
task('style', style)
task('script', script)
task('view', view)
task('asset', asset)

// build task
task('build', parallel(style, script, view, asset))
