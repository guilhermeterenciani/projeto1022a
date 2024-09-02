import Express from "express";
import Cors from 'cors'
import ListaProdutos from "./lista-produtos";

const app = Express()
app.use(Cors())
app.get("/produtos",async(req,res)=>{
    const listaProdutos = new ListaProdutos()
    res.send(await listaProdutos.execute())
})

app.post("/produtos",async(req,res)=>{
    console.log("Alguém tentou cadastrar Produtos")
})

const porta = 8000
app.listen(porta,()=>{
    console.log("Server Rodando")
    console.log("digite: localhost:8000/produtos na url para acessar o servidor.")
})

