import e, {Router,Request,Response} from 'express';
import MySQL from '../sql/mysql';

const router = Router();

router.get('/musicos',(req:Request,res:Response)=>{
    const query =`
        SELECT * 
        FROM musicos`;
    
    MySQL.ejecutarQuery(query,(err:any,musicos:Object[])=>{
        if(err){
            res.status(400).json({
                ok:false,
                error:err,
            });
        }else{
            res.json({
                ok:true,
                musicos:musicos
            });
        }
    });

});

router.get('/musicos/:id',(req:Request,res:Response)=>{

    const id = req.params.id;
    const escapeId = MySQL.instance.cnn.escape(id); 
    const query =`
            SELECT * 
            FROM musicos
            where id = ${escapeId}`;
    
    MySQL.ejecutarQuery(query,(err:any,musico:Object[])=>{
        if(err){
            res.status(400).json({
                ok:false,
                error:err,
            });
        }else{
            res.json({
                ok:true,
                musico:musico[0]
            });
        }
    });

});

export default router;