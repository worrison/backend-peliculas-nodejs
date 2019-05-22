const http=require('http');
const url=require('url');

let peliculas=require('./films');

const HOSTNAME = "127.0.0.1";
const PORT=3000;

//callback
let server = http.createServer((request,response)=>{

        let pathName = url.parse(request.url).pathname;  
        console.log(pathName)   
            if(pathName === "/")
            {
                response.statuscode=200;
                response.setHeader('Content-type','application/json');
                //response.end(JSON.stringify(response))
                response.end("Hola buenos dias")
            }
            if(pathName === '/listado')
            {
                response.statuscode=200;
                response.setHeader('Content-type','application/json');
                response.end(JSON.stringify(peliculas));
            }
            if(pathName === '/ordenado')
            {
                response.statuscode=200;
                response.setHeader('Content-type','application/json');
                response.end(JSON.stringify(peliculas.sort((a,b) => a.title > b.title? 1:-1)));
                
            }
    }) 
server.listen(PORT,HOSTNAME,()=>{
    console.log("arrancado");

})
