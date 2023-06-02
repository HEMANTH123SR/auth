const express=require('express')

const app=express()

const standardExpressFunction=(requestObj,responseObj,nextMiddleWare)=>{
    console.log('i am standard express function')
    responseObj.send(`<h1>hello world</h1>`)
}

const middleWareFunction=(req,res,next)=>{
    console.log('i am middle ware')
    next()
}
app.get('/',middleWareFunction,standardExpressFunction)


app.listen(3000,()=>{
    console.log('server started at port number 3000')
})