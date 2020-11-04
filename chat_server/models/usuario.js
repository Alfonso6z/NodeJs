
const {Schema,model} = require('mongoose');
const UsuarioSchema = Schema({

    nombre:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    online:{
        type:Boolean,
        default:false
    },

       
});

UsuarioSchema.method('toJSON',function(){
    const {__v,_id,password, ...objetc} = this.toObject();
    objetc.uid = _id;
    return objetc; 
});

module.exports = model('Usuario',UsuarioSchema);