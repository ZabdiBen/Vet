import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    telefono:{
        type: Number,
        default: null,
        trim:true
    },
    Web:{
        type:String,
        default:null
    },
    token:{
        type:String
    },
    confirmado:{
        type:Boolean,
        default:false
    }
})

const veterinario = mongoose.model('veterinario', veterinarioSchema)

export default veterinario