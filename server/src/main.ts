import Express from "express";
import ListaProdutos from "./lista-produtos";

const app = Express()
app.get("/produtos",async(req,res)=>{
    const listaProdutos = new ListaProdutos()
    res.send(await listaProdutos.execute())
})

let porta = 8000
app.listen(porta,()=>{
    console.log("Server Rodando")
    console.log("digite: localhost:8000/produtos na url para acessar o servidor.")
    
});

