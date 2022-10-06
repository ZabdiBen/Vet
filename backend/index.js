import express from "express"; //npm i express
import conectarDB from './config/db.js'
import dotenv from "dotenv"
import veterinarioRoutes from "./routes/veterinarioRoutes.js"

const app = express();

app.use(express.json())

dotenv.config()

conectarDB()

app.use('/api/vets', veterinarioRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto ${PORT}`)
})