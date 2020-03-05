let express = require('express');
let app = express();
app.get('/say',function(req,res){
    console.log(req)
    let {wd,cb} = req.query
    console.log(wd)
    res.end(`${cb}('nihaoya')`)
})
app.listen(3000)