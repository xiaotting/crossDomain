let express = require('express');
let app = express();

app.use(express.static(__dirname)); //以当前目录做静态资源

app.listen(4000)