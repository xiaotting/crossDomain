let express = require('express');
let app = express();
let whiteList = ['http://localhost:3001']
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if (whiteList.includes(origin)) {
        // 具体HTTP Header配置，请参考：https://cloud.tencent.com/document/product/570/10364
        //允许哪些源可以访问
        res.setHeader('Access-Control-Allow-Origin', origin);
        //允许携带哪个头
        res.setHeader('Access-Control-Allow-Headers', 'name');
        //允许请求的方式
        res.setHeader('Access-Control-Allow-Methods', '*');   //允许请求的方法
        //options 预检的时间
        res.setHeader('Access-Control-Max-Age', 6000)
    }
    next();
});
app.get('/say', function (req, res) {
    console.log(req.headers)
    res.end('你也好呀')
})
app.listen(4000)