const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function9app) {
	app.use('/api', createProxyMiddleware({ target: 'https://api.spoonacular.com', changeOrigin: true, pathRewrite: { '^/api':",}'
	})
	};
};
