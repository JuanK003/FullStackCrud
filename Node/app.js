import express from "express";
import cors from 'cors';
//Importando la conexión a la base de datos
import db from "./database/db";
//Importando las routas
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/blogs', blogRoutes);

try{
    await db.authenticate();
    console.log('Conexión Completada');

}catch(error){
    console.log('Error de Conexión');
}

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.listen(8000, () => {
    console.log('Server Up Running in http://localhost:8000/');
});