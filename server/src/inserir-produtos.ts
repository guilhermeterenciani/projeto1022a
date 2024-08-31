import mysql from 'mysql2/promise'
import 'dotenv/config'
export default class InserirProdutos{
    async execute(input:Input):Promise<Output>{
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USUARIO,
            database: process.env.DB_BANCO,
        });
        await connection.query("insert into produtos values(?,?,?,?,?)",
        [input.id,input.nome,input.descricao,input.preco,input.imagem])

        return input
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