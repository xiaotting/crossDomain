let express = require('express');
let app = express();
app.get('/say', function (req, res) {
    console.log(req)
    let { wd, callback } = req.query
    console.log(wd)
    res.end(`${callback}('nihaoya')`)
})
app.listen(3000)