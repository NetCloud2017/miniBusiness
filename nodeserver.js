const express = require('express');
const app = express() ;
app.get('/greetings', (erq, res) => {
    res.send('Hi !')
})
app.post('/product', (req, res) =>{
    const contentType = req.header['content-type'];
    req.on('data', (buffer) => {
        // 数据接受到时触发，这里可能触发多次；
    })
    req.on('end', () => {
        //  当 数据量大的时候 是分段发出的
    //   解析body 是个通用过程， 这里应用通过middleware 中间件来 设计代码

        switch (contentType) {

        }
    })
    res.set('content-type','application/json')
    res.status(201).send(JSON.stringify({success: true}))
})
app.put('/product/:id', (req,res) => {
    console.log(req.params.id);
    res.sendStatus(204);
})
app.delete('/product/:id', (req,res) => {
    console.log(req.params.id);
    res.sendStatus(204);
})

// 重定向  301 -7
app.get('/301', (req, res) => {
    res.redirect(301, '/def')
})
app.get('/def', (req, res) => {
     res.send('this a def(get)')
})

// 错误处理

app.listen(8080, (err) => {
    console.log(err);
})
