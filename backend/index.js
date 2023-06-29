import express from 'express';
import pg from 'pg';
import userRouter from './Routes/UserRouter.js';
import cors from 'cors'

const app = express();
const puerto = process.env.PORT || 8090;

app.listen(puerto,()=>{
    console.log("el servidor se está ejecutando");
});

export const credenciales = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'NIED',
    password: '1234',
    port: 5432
});

credenciales.connect((err)=>{
    if(err){
        console.log("error al conectar con la base de datos ", err.stack)
    }else{
        console.log("se ha conectado a la base de datos")

    }
})

app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json());
app.use("/user", userRouter);