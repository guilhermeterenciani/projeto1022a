import Express from "express";
import Cors from 'cors'
import ListaProdutos from "./lista-produtos";
import InserirProdutos from "./inserir-produtos";


const app = Express()
app.use(Cors())
app.use(Express.json())

app.get("/produtos",async(req,res)=>{
    const listaProdutos = new ListaProdutos()
    res.send(await listaProdutos.execute())
})

app.post("/produtos",async(req,res)=>{
    console.log("Alguém tentou cadastrar Produtos")
    const {id,nome,descricao,preco,imagem} = req.body
    const produto = {
        id,
        nome,
        descricao,
        preco,
        imagem
    }
    const inserirProduto = new InserirProdutos()
    const produtoInseridoOUerro = await inserirProduto.execute(produto)
    if(produtoInseridoOUerro instanceof Error){
        console.log(produtoInseridoOUerro.message)
        res.status(200).send(JSON.stringify({mensagem:produtoInseridoOUerro.message}))
    }else{
        res.status(201).send(produtoInseridoOUerro)
    }

})

const porta = 8000
app.listen(porta,()=>{
    console.log("Server Rodando")
    console.log("digite: localhost:8000/produtos na url para acessar o servidor.")
})

