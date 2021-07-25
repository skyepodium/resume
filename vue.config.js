module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
	outputDir: process.env.NODE_ENV === 'production'
    ? './docs'
    : './dist'    
}
