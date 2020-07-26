module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{   //代理最安全 要配置nginx
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}