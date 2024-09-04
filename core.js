const http =require('http');
const  dataControl=(req,res)=>{
    res.write("<h1>hello binod bist<h1/> you're the best")
        res.end();
}
http.createServer(
   dataControl
).listen(4500);

