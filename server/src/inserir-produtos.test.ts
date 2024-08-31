import { expect , test , beforeEach } from 'vitest'
import mysql from 'mysql2/promise'
import 'dotenv/config'
beforeEach(async()=>{
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USUARIO,
        database: process.env.DB_BANCO,
    });
    await connection.query("DELETE FROM produtos");
    await connection.query("insert into produtos values(?,?,?,?,?)",
        ['1','Iphone','Celular Ruim','4000.50','https://s2-techtudo.glbimg.com/fQiJ0IoTPyS7kOji53qOHDP_VWM=/0x0:4000x2664/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/J/F/1YRriISlAbBwU7zUr7wQ/marca-d-aguadd.png'])
})
test("Deve inserir um produto no banco de dados",()=>{

})