let express = require('express');
let app = express();

app.get('/say', function (req, res) {
    res.end('你也好呀')
})
app.use(express.static(__dirname)); //以当前目录做静态资源

app.listen(4000)