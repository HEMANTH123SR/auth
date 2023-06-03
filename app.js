const express=require('express')

const app=express()

const standardExpressFunction=(requestObj,responseObj,nextMiddleWare)=>{
    console.log('i am standard express function')
    responseObj.send(`<h1>hello world</h1>`)
}

const middleWareFunction=(req,res,next)=>{
    console.log('i am middleware#1')
    // res.send('<h1>i am tea pot</h1>')
    next()
}

const middleWareFunction2 = (req, res, next) => {
  console.log("i am middleware#2");
  // res.send('<h1>i am tea pot</h1>')
  next();
};

const errorHandler=(err,req,res,next)=>{
if(err){
    res.send('<h1>there was an error</h1>')
}
}

app.use(middleWareFunction);
app.use(middleWareFunction2);
app.get('/',standardExpressFunction)


app.listen(3000,()=>{
    console.log('server started at port number 3000')
})