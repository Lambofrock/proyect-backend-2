import { Router } from "express";
import productManager from "../managers/product.manager.js"


const router = Router();

router.post('/products',async (req,res )=>{
    try {
        await productManager.createProd(req.body);
        res.redirect('/products')
    } catch (error) {
     console.log(error)
    }
})

const productManager = new productManager ('./src/data/products.json');
 

export default router