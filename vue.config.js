const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new MonacoEditorPlugin({
            // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
            // Include a subset of languages support
            // Some language extensions like typescript are so huge that may impact build performance
            // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
            // Languages are loaded on demand at runtime
            languages: ['javascript', 'css', 'html', 'typescript', 'json']
            })
        ]
    },
    pages: {
        devume: {
            entry: 'src/pages/devume/main.js',
            template: 'public/devume.html',
            filename: 'index.html'
        },
        resume: {
            entry: 'src/pages/resume/main.js',
            template: 'public/resume.html',
            filename: 'resume.html'
        }
    }
}