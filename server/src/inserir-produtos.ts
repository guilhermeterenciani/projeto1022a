import mysql from 'mysql2/promise'
import 'dotenv/config'
export default class InserirProdutos{
    async execute(input:Input):Promise<Output|Error>{ 
        try{
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USUARIO,
                database: process.env.DB_BANCO,
            });
            await connection.query("insert into produtos values(?,?,?,?,?)",
                [input.id,input.nome,input.descricao,input.preco,input.imagem])
            return input
        }
        catch(e:any){
            if(e.code === 'ER_DUP_ENTRY'){
                return new Error("Erro: Chave Primária Duplicada")
            }else{
                console.log(e)
                return new Error("Erro: Desconhecido")
            }
        }
            
    } 
    
}
type Input = {
    id:number,
    nome:string,
    descricao:string,
    preco:number,
    imagem:string
}
type Output = {
    id:number,
    nome:string,
    descricao:string,
    preco:number,
    imagem:string
}