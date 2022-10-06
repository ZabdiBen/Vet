import Veterinario from "../models/Veterinario.js"

const registrar = async (req, res) => {
    
    const { email, password, nombre } = req.body

    try {
        //Guardar un nuevo veterinario
        const veterinario = new Veterinario(req.body)
        const veterinarioGuardado = await veterinario.save()
        
        res.json(veterinarioGuardado)
    } catch (error) {
        console.log
    }

}

const perfil = (req, res) => {
    res.json({msg:'Hola veterinario'})
}

export { registrar, perfil}