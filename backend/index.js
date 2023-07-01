import express from 'express';
import pg from 'pg';
import userRouter from './Routes/UserRouter.js';
import cors from 'cors'

const app = express();
const puerto = process.env.PORT || 8090;


//asignamos el puerto para que se ejecute el servidor
app.listen(puerto,()=>{
    console.log("el servidor se está ejecutando");
});

//se establecen las credenciales para el ingreso a la base de datos
export const credenciales = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'NIED',
    password: '1234',
    port: 5432
});

//se realiza la conexion a la base de datos
credenciales.connect((err)=>{
    if(err){
        console.log("error al conectar con la base de datos ", err.stack)
    }else{
        console.log("se ha conectado a la base de datos")
    }
})

//cors nos permite recibir peticiones desde la direccion especificada
app.use(cors({origin:"http://localhost:5173"}))
//nos permite utilizar los archivos json
app.use(express.json());
//redirecciona a las rutas de user
app.use("/user", userRouter);