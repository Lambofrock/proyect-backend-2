import express from "express";
import productManager from "../products/product.manager.js"

const viewsRouter = express.Router();

viewsRouter.get("/",async(req,res)=>{
    const products = await productManager.getAll();
    res.render("realTimeProducts",{products});
})

viewsRouter.get("/home",(req,res)=>{
    res.render("home")
})
export default viewsRouter;