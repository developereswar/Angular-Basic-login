const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));
app.get('*', (res, req)=>{
    res.sendFile(`index.html`)
})
app.listen(8080);   