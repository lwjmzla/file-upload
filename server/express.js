const express = require('express');
const fs = require('fs');
const app = express();

const fileName = 'yl-ui-vue2.rar'

app.get('/length',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('' + fs.statSync('./' + fileName).size);
})

app.options('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Range')
    res.end('');
});

app.get('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.download(fileName, {
        acceptRanges: true
    })
})

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})
