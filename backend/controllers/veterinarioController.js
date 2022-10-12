import Veterinario from "../models/Veterinario.js"

const registrar = async (req, res) => {
    
    const { email } = req.body

    //prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email})

    if(existeUsuario){
        const err = new Error('The user exist')
        return res.status(400).json({msg: err.message})
    }

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

const confirmar = async (req, res) => {
    const {token} = req.params;

    const usuarioConfirmar = await Veterinario.findOne({token}) //Es objecto pero en la sintaxis moderna de javascript se puede escribir solo la llave

    if(!usuarioConfirmar){
        const error = new Error('token no valido')
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()
        res.json({msg:'Usuario confirmado correctamente ...'})
    } catch (error) {
        console.log(error);
    }


}

export { registrar, perfil, confirmar}